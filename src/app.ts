const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
import './connectMongoose';
import sampleRoute from "./routes/sample";

const corsOptions = {
    origin: [/.*/],
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get("/", (req: any, res: any) => {
    res.send("hello from the express-typescript server now?, changed to something else");
});

app.get("/testRoute", sampleRoute);

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('api server listening on port ' + port);
});
