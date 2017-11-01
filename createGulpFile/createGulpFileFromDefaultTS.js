const createGulpTasks = require("./createGulpTasks");
const typescript = require("gulp-typescript");
const path = require("path");
const defaultTsConfigJsonPath = "./defaultTsconfig.json";
const tsconfig = require(defaultTsConfigJsonPath);
const tsProject = typescript.createProject(defaultTsConfigJsonPath);

function createGulpFileFromDefaultTsConfig({source, outputDir}) {
    source = path.resolve(source);
    const tsconfigPath = path.resolve("./defaultTsconfig.json");
    createGulpTasks({source, tsconfigPath, tsconfig, outputDir, tsProject});
}

module.exports = createGulpFileFromDefaultTsConfig;
