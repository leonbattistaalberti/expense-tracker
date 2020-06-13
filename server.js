const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold)
);
