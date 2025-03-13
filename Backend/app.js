import express from "express";
import bodyParser from "body-parser"; // for parsing the data from the request body
import cors from "cors"; // for cross-origin requests
import dotenv from "dotenv"; // to read .env file
import cookieParser from "cookie-parser";
import dbconnect from "./database/dbconnect.js";
import userRouter from "./router/userrouter.js";
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/", (req, res, next) => {
  console.log("Request received", req.url);
  next();
});
dbconnect();
export default app;
