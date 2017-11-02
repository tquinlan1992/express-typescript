const mongoose = require("mongoose");

mongoose.Promise = require('bluebird');
const mongo_url = 'mongodb://' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT;
console.log("process.env", process.env);
console.log("mongo_url environment", mongo_url);
mongoose.connection.openUri(mongo_url).then(() => {
    console.log("Successfully connected to MONGO_URL: " + mongo_url);
}, (err: any) => {
    console.error("Error connecting to MONGO_URL: " + mongo_url);
});
