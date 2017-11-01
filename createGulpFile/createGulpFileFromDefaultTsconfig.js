const createGulpTasks = require("./createGulpTasks");
const typescript = require("gulp-typescript");
const path = require("path");
const defaultTsConfigJsonPath = "./DefaultTsconfig.json";
const tsconfig = require(defaultTsConfigJsonPath);
const tsProject = typescript.createProject(defaultTsConfigJsonPath);

function createGulpFileFromDefaultTsConfig({source, nodemonEnvJson, outputDir}) {
    source = path.resolve(source);
    const tsconfigPath = path.resolve("./defaultTsconfig.json");
    createGulpTasks({source, tsconfigPath, tsconfig, outputDir, nodemonEnvJson, tsProject});
}

module.exports = createGulpFileFromDefaultTsConfig;
