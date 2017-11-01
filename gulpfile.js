const gulp = require("gulp");
const typescript = require("gulp-typescript");
const nodemon = require("gulp-nodemon");
const tsProject = typescript.createProject("./src/tsconfig.json");
const tsconfigContext = "./src/";
const env = require('gulp-env');
const tsconfig = require(tsconfigContext + "tsconfig.json");
const sourcemaps = require('gulp-sourcemaps');
const nodemonEnvJson = '.env.json';
const tsconfigOuputDir = tsconfigContext + tsconfig.compilerOptions.outDir;

gulp.task("build", () => {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(typescript())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(tsconfigOuputDir));
});

const setUpWatchGlobWithTsconfigContext = tsconfig.include.map(glob => {
    return tsconfigContext + glob;
});

gulp.task("build-watch", () => {
    gulp.watch(setUpWatchGlobWithTsconfigContext, ['build']);
});

gulp.task('start-nodemon', ["build"], function() {
    env({file: nodemonEnvJson});
    nodemon({
        script: tsconfigOuputDir  + "app.js",
        ext: 'js json',
        ignore: [
            'node_modules/'
        ]
    });
});
