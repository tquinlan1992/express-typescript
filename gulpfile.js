const gulp = require("gulp");
const typescript = require("gulp-typescript");
const nodemon = require("gulp-nodemon");
const tsProject = typescript.createProject("./src/tsconfig.json");
const tsconfigContext = "./src/";
const env = require('gulp-env');
const tsconfig = require(tsconfigContext + "tsconfig.json");
const sourcemaps = require('gulp-sourcemaps');
const nodemonEnvJson = '.env.json';
console.log("tsconfigContext + tsconfig.compilerOptions.include", tsconfigContext + tsconfig.compilerOptions.include);

gulp.task("build", () => {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(typescript())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(tsconfigContext + tsconfig.compilerOptions.outDir));
});

gulp.task("build-watch", () => {
    gulp.watch(tsconfigContext + tsconfig.include, ['build']);
});

gulp.task('start-nodemon', function() {
    env({file: nodemonEnvJson, var: {
        "MONGO_URL": "mongodb://localhost:27017"
    }});
    nodemon({
        script: 'build/app.js',
        ext: 'js json',
        ignore: [
            'node_modules/'
        ]
    });
});
