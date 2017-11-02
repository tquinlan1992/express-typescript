const mongoose = require("mongoose");

mongoose.Promise = require('bluebird');
const mongoUrl = process.env.MONGO_URL;
console.log("here", mongoUrl);
mongoose.connection.openUri(mongoUrl).then(() => {
    console.log("Successfully connected to MONGO_URL: " + mongoUrl);
}, (err: any) => {
    console.error("Error connecting to MONGO_URL: " + mongoUrl);
});
