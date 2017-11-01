const typescript = require("gulp-typescript");
const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const env = require('gulp-env');
const sourcemaps = require('gulp-sourcemaps');
const path = require("path");

function createGulpTasks({
    source,
    tsconfig,
    tsconfigPath,
    outputDir,
    nodemonEnvJson,
    tsProject
}) {


    gulp.task("build", () => {
        return tsProject.src()
            .pipe(sourcemaps.init())
            .pipe(typescript())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(outputDir));
    });

    const setUpWatchGlobWithTsconfigContext = tsconfig.include.map(glob => {
        return path.resolve(source, glob);
    });


    gulp.task("build-watch", () => {
        gulp.watch(setUpWatchGlobWithTsconfigContext, ['build']);
    });

    gulp.task('start-nodemon', ["build"], function() {
        env({
            file: nodemonEnvJson
        });
        nodemon({
            script: path.resolve(outputDir, "app.js"),
            ext: 'js json',
            ignore: [
                'node_modules/'
            ]
        });
    });
}

module.exports = createGulpTasks;
