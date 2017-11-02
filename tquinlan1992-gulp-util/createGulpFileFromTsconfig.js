const typescript = require("gulp-typescript");
const appRoot = require('app-root-path');
const path = require("path");
const createGulpTasks = require("./createGulpTasks");

function createGulpFileFromTsconfigContext({
    tsconfigContext
}) {
    tsconfigContext = appRoot.resolve(tsconfigContext);

    const tsconfigPath = path.resolve(tsconfigContext, "tsconfig.json");

    const tsProject = typescript.createProject(tsconfigPath);
    const tsConfigPath = path.resolve(tsconfigContext, "tsconfig.json");
    const tsconfig = require(tsConfigPath);
    const tsconfigOuputDir = path.resolve(tsconfigContext, tsconfig.compilerOptions.outDir);

    createGulpTasks({
        tsconfig,
        source: tsconfigContext,
        tsProject,
        outputDir: tsconfigOuputDir
    });
}

module.exports = createGulpFileFromTsconfigContext;
