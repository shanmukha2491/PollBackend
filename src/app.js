import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.route.js";

const app = express();

const cors = require('cors');

// Allow specific origin
app.use(cors({
    origin: 'https://poll-client.vercel.app', // Frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow cookies if needed
}));

// Or, to allow all origins (use carefully in production)
app.use(cors());


app.use(express.json());

app.use("/", indexRouter);

export default app;