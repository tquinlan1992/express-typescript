const mongoose = require("mongoose");

mongoose.Promise = require('bluebird');
console.log("MONGO_URL", process.env.MONGO_URL);
mongoose.connection.openUri(process.env.MONGO_URL).then(() => {
    console.log("Successfully connected to MONGO_URL: " + process.env.MONGO_URL);
}, (err: any) => {
    console.log("err", err)
    console.error("Error connecting to MONGO_URL: " + process.env.MONGO_URL);
});
