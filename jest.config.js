module.exports = {
  "transform": {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testRegex": "(/__src__/.*|(\\.|/)(test|spec))\\.(ts?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ]
};
