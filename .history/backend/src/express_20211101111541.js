import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import  express  from "express";
import helmet from "helmet";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compression());
app.use(helmet())
app.use()
