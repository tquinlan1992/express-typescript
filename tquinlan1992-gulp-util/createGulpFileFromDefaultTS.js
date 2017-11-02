const createGulpTasks = require("./createGulpTasks");
const typescript = require("gulp-typescript");
const path = require("path");
const tsconfig = require("./defaultTsconfig.json");
const tsconfigPath = require.resolve("./defaultTsconfig.json");
const tsProject = typescript.createProject(tsconfigPath);

function createGulpFileFromDefaultTsConfig({source, outputDir}) {
    source = path.resolve(source);
    createGulpTasks({source, tsconfig, outputDir, tsProject});
}

module.exports = createGulpFileFromDefaultTsConfig;
