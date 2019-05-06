const mongoose = require("mongoose");
const express = require("express");


const halls = express.Router();

halls.get("/", async (req, res) => {
  console.log("get halls")

  res.send("get halls");
  // console.log(tasks);
});

module.exports = halls;