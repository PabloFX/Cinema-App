const mongoose = require("mongoose");
const express = require("express");
//const async = require("async");

const { Room, validate } = require("../models/room");
const { checkSeats } = require("../modules/checkSeats"); //module to check if there is no separate empty space between taken
const { randomSeats } = require("../modules/randomSeats"); //modules generates random seats booking
const rooms = express.Router();

//get all existing rooms from the database
rooms.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.send(rooms);
});

//create new rooms (specific title with specific time)
rooms.post("/", async (req, res) => {
  const { error } = validate(req.body); //request validation according to Schema

  if (error) return res.status(400).send(error.details[0].message);

  //date conversion from timestamp to normal date
  req.body.forEach(room => {
    return (room.date = new Date(room.date));
  });
  //create random bookings
  req.body.forEach(room => {
    //console.log(room.capacity);
    const randomArray = room.capacity.map((row, i) => {
      //console.log(`initial row value is: ${row}`);
      row = randomSeats();
      //console.log(`row number is: ${row}`);
      return row;
    });
    room.capacity = randomArray.slice(0);
    //console.log(room.capacity);
  });

  //find room with given properties and return as an object
  const getRoom = async room => {
    return await Room.findOne({ date: room.date, title: room.title }).select(
      "title date"
    );
  };

  //wrapper function to collect all promises (rooms with given conditions) before further actions
  const getRooms = async () => {
    return await Promise.all(req.body.map(room => getRoom(room)));
  };

  const rooms = async () => {
    const fetchRooms = await getRooms(); //fetch duplicates (if any) from database

    /* condition to iterate over every room in request to create to check 
    with fetched rooms if there is any matching duplicate. Can't check fetchRooms.length because
    empty objects are also counted */
    const isDuplicate = req.body.every(room => {
      return fetchRooms.every(fetchedRoom => {
        if (fetchedRoom === null) {
          return true;
        } else if (
          room.title == fetchedRoom.title &&
          room.date.toString() == fetchedRoom.date.toString() //date parsed to string to be able to compare
        ) {
          return false;
        } else {
          return true;
        }
      });
    });

    return !isDuplicate;
  };

  const findDuplicates = await rooms();

  if (findDuplicates === true) {
    res
      .status(400)
      .send(
        "Some of the room with given title and date already exists! (duplicate)"
      );
  } else {
    const result = await Room.insertMany(req.body);
    //console.log(result);
    res.send(result);
  }
});

//get all rooms from given period of time
rooms.get("/getRooms", async (req, res) => {
  const rooms = await Room.find({
    date: {
      $gte: new Date(req.body.dateStart),
      $lte: new Date(req.body.dateEnd)
    }
  });

  //console.log(rooms);
  res.send(rooms);
});

rooms.put("/getTickets", async (req, res) => {
  if (!req.body.capacity.every(checkSeats)) {
    res.status(400).send("You can't leave one free spot between others");
  } else {
    const result = await Room.findOneAndUpdate(
      { title: req.body.title, date: new Date(req.body.date) },
      { capacity: req.body.capacity },
      { new: true }
    );

    //console.log(result);
    res.send(result);
  }
});

rooms.delete("/", async (req, res) => {
  const result = await Room.deleteMany();
  res.send(result);
});

//DELETE SEANS PO ID

module.exports = rooms;
