import config from "../config/config"
import app from "./express"
import  mongoose  from "mongoose"
import Template from "../template"

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri,)