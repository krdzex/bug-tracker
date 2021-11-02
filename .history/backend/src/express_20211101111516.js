import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import  express  from "express";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser)
