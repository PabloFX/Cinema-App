const Joi = require("joi");
const mongoose = require("mongoose");

const Room = mongoose.model(
  "Room",
  new mongoose.Schema({
    date: {
      type: Date,
      required: true
    },
    title: {
      type: String,
      minLength: 2,
      required: true
    },
    capacity: {
      type: [Number],
      required: true,
      default: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  })
);

function validateRoom(rooms) {
  const schemaRoom = {
    date: Joi.date(),
    title: Joi.string()
      .min(2)
      .required(),
    capacity: Joi.array().items(Joi.number())
  };

  const schemaRooms = Joi.array().items(schemaRoom)

  return Joi.validate(rooms, schemaRooms);
}

exports.Room = Room;
exports.validate = validateRoom;
