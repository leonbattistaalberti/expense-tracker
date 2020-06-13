const path = require("path");
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
const transactions = require("./routes/transactions");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

// connect MongoDB
connectDB();

// body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/**
 * // TODO: FIX
 *
 * @param  {type} process.env.NODE_ENV === "production" description
 * @return {type}                                       description
 */
if (process.env.NODE_ENV === "production") {
  // static folder
  app.use(express.static("client/build"));
  // get index.html from the client/build folder
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold)
);
