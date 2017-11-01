const nodemonEnvJson = '.env.json';
const createGulpFile = require("./createGulpFile/index");
const tsconfigContext = "./src/";

createGulpFile.createGulpFileFromTsConfig({tsconfigContext, nodemonEnvJson});

//createGulpFile.createGulpFileFromDefaultTsConfig({source: "./src", nodemonEnvJson, outputDir: "./build"});
