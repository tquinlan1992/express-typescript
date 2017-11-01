const typescript = require("gulp-typescript");
const gulp = require("gulp");
const sourcemaps = require('gulp-sourcemaps');
const path = require("path");
const gulpTslint = require("gulp-tslint");

function createGulpTasks({
    source,
    tsconfig,
    tsconfigPath,
    outputDir,
    tsProject
}) {


    gulp.task("build", () => {
        return tsProject.src()
            .pipe(sourcemaps.init())
            .pipe(typescript())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(outputDir));
    });

    const setUpGlobWithTsconfigContext = tsconfig.include.map(glob => {
        return path.resolve(source, glob);
    });

    const compile = ["tslint", "build"];


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
}

module.exports = createGulpTasks;
