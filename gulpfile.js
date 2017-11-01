const gulpConfigJSFromTs = require("./createGulpFile/gulp.config.fromts");
//const gulpConfigJSNotFromTs = require("./createGulpFile/gulp.config.notfromts");
const createGulpFile = require("./tquinlan1992-gulp-util/index");

createGulpFile.createGulpFileFromTsConfig(gulpConfigJSFromTs);

//createGulpFile.createGulpFileFromDefaultTs(gulpConfigJSNotFromTs);
