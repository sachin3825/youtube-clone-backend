import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// * JSON Parsing and json limiting
app.use(
  express.json({
    limit: "16kb",
  })
);

// * Params data or url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// * static => when we want store files (img,pdf, etc..) on the server
app.use(express.static("public"));

// * cookies configuration
app.use(cookieParser());

export { app };
