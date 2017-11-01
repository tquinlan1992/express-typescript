const gulpConfigJSNotFromTs = require("./createGulpFile/gulp.config.fromts");
//const gulpConfigJSNotFromTs = require("./createGulpFile/gulp.config.notfromts");
const createGulpFile = require("./createGulpFile/index");

createGulpFile.createGulpFileFromTsConfig(gulpConfigJSNotFromTs);

//createGulpFile.createGulpFileFromDefaultTs(gulpConfigJSNotFromTs);
