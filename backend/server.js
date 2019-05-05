const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, POST, PUT, GET");
  next();
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
