import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();

// * This will work but breaks consistency of the code
// require("dotenv").config({ path: "./env" });

// * First Approach to connect to DB using IIFE
/*

import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONFODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error :", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error", err);
    throw error;
  }
})();
*/
