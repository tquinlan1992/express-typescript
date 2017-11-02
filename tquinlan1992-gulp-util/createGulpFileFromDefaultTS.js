const createGulpTasks = require("./createGulpTasks");
const typescript = require("gulp-typescript");
const path = require("path");
const defaultTsConfigJsonPath = path.resolve("./defaultTsconfig.json");
const tsconfig = require("./defaultTsconfig.json");
const tsProject = typescript.createProject(defaultTsConfigJsonPath);

function createGulpFileFromDefaultTsConfig({source, outputDir}) {
    source = path.resolve(source);
    const tsconfigPath = path.resolve(defaultTsConfigJsonPath);
    createGulpTasks({source, tsconfigPath, tsconfig, outputDir, tsProject});
}

module.exports = createGulpFileFromDefaultTsConfig;
