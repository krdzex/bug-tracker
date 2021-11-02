import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import cors from "cors"
import userRoutes from "./routes/user.routes"
import authRoutes from "./routes/auth.routes"
import bugRoutes from "./routes/bug.routes"
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(helmet())
app.use(cors())
app.use("/", userRoutes)
app.use("/", authRoutes)
app.use("/", bugRoutes)

export default app;