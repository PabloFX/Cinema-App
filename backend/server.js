const express = require("express");
const mongoose = require("mongoose");
const rooms = require("./src/routes/rooms");
const tickets = require("./src/routes/tickets");

const port = process.env.PORT || 8080;
const app = express();

const URL =
  "mongodb+srv://coderscamp:coderscrew@cluster-ajob4.mongodb.net/test?retryWrites=true";

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
app.use("/api/rooms", rooms);
app.use("/api/tickets", tickets);

mongoose
  .connect(URL, { useNewUrlParser: true, dbName: "cinema-app" })
  .then(() => console.log("Connected to the database..."))
  .catch(err => console.error("Could not connect to the database...", err));

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
