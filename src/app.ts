import * as express from 'express';
const app = express();
import * as cors from 'cors';
import * as bodyParser from "body-parser";

const corsOptions = {
  origin: [/.*/],
  credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.send("hello from the angular-gulp-template api server");
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('api server listening on port '+ port);
});
