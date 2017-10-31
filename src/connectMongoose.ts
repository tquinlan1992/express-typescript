const mongoose = require("mongoose");

mongoose.Promise = require('bluebird');
mongoose.connection.openUri(process.env.MONGO_URL).then(() => {
    console.log("Successfully connected to MONGO_URL: " + process.env.MONGO_URL);
}, (err: any) => {
    console.error("Error connecting to MONGO_URL: " + process.env.MONGO_URL);
});
