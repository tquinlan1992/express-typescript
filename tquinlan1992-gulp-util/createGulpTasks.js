const gulp = require("gulp");
const sourcemaps = require('gulp-sourcemaps');
const path = require("path");
const gulpTslint = require("gulp-tslint");

const del = require('del');

function createGulpTasks({
    source,
    tsconfig,
    tsconfigPath,
    outputDir,
    tsProject
}) {

    const setUpGlobWithTsconfigContext = tsconfig.include.map(glob => {
        return path.resolve(source, glob);
    });

    const preCompile = ["tslint", "copyNonTs"];
    gulp.task("build", [...preCompile], () => {
        return tsProject.src()
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(outputDir));
    });

    const compile = [...preCompile, "build"];


    gulp.task("build-watch", [...compile], () => {
        gulp.watch(setUpGlobWithTsconfigContext, [...compile]);
    });

    gulp.task("tslint", () => {
        const tsGlob = setUpGlobWithTsconfigContext.map(glob => {
            return glob + ".ts";
        });
        return gulp.src(tsGlob)
        .pipe(gulpTslint({
            formatter: "verbose"
        }))
        .pipe(gulpTslint.report());
    });

    gulp.task("copyNonTs", () => {
        const nonTsSrc = [path.resolve(source, "./**/*.json"), "!" + path.resolve(source, "./**/*.ts")];
        const outputFiles = [path.resolve(outputDir, "./**/*.json")];
        del(outputFiles);
        return gulp.src(nonTsSrc)
        .pipe(gulp.dest(outputDir, {}));
    });
}

module.exports = createGulpTasks;
