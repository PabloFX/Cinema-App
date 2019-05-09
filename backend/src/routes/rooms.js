const mongoose = require("mongoose");
const express = require("express");

const { Room, validate } = require("../models/room");
const { checkSeats } = require("../modules/checkSeats");
const rooms = express.Router();

rooms.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.send(rooms);
});

rooms.post("/", async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  req.body.forEach(room => {
    return (room.date = new Date(room.date));
  });

  //console.log(requestBody);
  //console.log(req.body);

  //SPRAWDZ W BAZIE CZY NIE MA JUZ SALI NA TEN TERMIN Z TYM TYTULEM
  //EVERY()
  /* const request = req.body;

  let isDuplicate = request.every(async room => {
    const doesExists = await Room.find(
      { title: room.title },
      { date: room.date }
    );
    console.log(`Does collection exists: ${doesExists}`);
    return !doesExists;
  }); */

  //console.log(`Duplicates: ${!isDuplicate}`);

  //const result = await Room.collection.insert(req.body);
  const result = await Room.insertMany(req.body);
  //console.log(result);
  res.send(result);

  //console.log(req.body);
  //res.send(req.body);
});

//GET ZAKRES DAT

rooms.get("/getRooms", async (req, res) => {
  const rooms = await Room.find({
    date: {
      $gte: new Date(req.body.dateStart),
      $lte: new Date(req.body.dateEnd)
    }
  });

  console.log(rooms);
  res.send(rooms);
});

//PUT SEANS(BILETY)

rooms.put("/getTickets", async (req, res) => {
  if (!req.body.capacity.every(checkSeats)) {
    res.send("You can't leave one free spot between others");
  } else {
    const result = await Room.findOneAndUpdate(
      { title: req.body.title, date: new Date(req.body.date) },
      { capacity: req.body.capacity },
      { new: true }
    );

    console.log(result);
    res.send(result);
  }
});

//DELETE SEANS PO ID

module.exports = rooms;
