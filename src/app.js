import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.route.js";

const app = express();

app.use(
  cors({
    origin: 'https://poll-client.vercel.app', 
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/", indexRouter);

export default app;