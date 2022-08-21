const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const winston = require("./config/winston");
const { prettyString } = require("./utils");

// Create express application
const app = express();
app.use(morgan("short", { stream: winston.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET");
    return res.status(200).json({});
  }
  next();
});

// Import routes
const helloRoutes = require("./routes/hello");
const byeRoutes = require("./routes/bye");

// Use the routes
app.use("/hello", helloRoutes);
app.use("/bye", byeRoutes);

// Error handling
app.use((_req, _res, next) => {
  // Set 404 error if something is not found otherwise
  const err = new Error("Not Found");
  err.status = 404;
  err.message = "Something went wrong here :(";
  next(err);
});
app.use((err, _req, res, _next) => {
  winston.info("Application error:\n" + prettyString(err));
  res.status(err.status);
  res.send(err.message);
});

module.exports = app;
