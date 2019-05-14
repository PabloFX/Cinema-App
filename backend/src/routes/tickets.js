const express = require("express");
const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const hbs = require("nodemailer-handlebars");
const moment = require("moment");

const { validateTicket } = require("../models/ticket");
const tickets = express.Router();
const config = require("../config/config.json");

const mailApiKey = config.MAIL_API;

tickets.post("/", async (req, res) => {
  const { error } = validateTicket(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let transporter = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: mailApiKey
    })
  );

  transporter.use(
    "compile",
    hbs({
      viewEngine: "express-handlebars",
      viewPath: "./src/views/"
    })
  );

  const mailOptions = {
    from: '"Your Cinema" <your_cinema@movies.com>',
    to: req.body.mail,
    subject: "Your tickets order",
    text:
      "Bellow You will find confirmation about Your order. Show this message before entry to validate Your ticket by staff member",
    template: "index",
    context: {
      name: req.body.name,
      surname: req.body.surname,
      date: moment(req.body.date).format("YYYY-MM-DD HH:mm"),
      title: req.body.title,
      seats: req.body.seats,
      price: req.body.price
    },
    attachments: [
      {
        filename: "cinema-room.jpg",
        path: "./src/views/images/cinema-room.jpg",
        cid: "cinema-room"
      }
    ]
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send(mailApiKey);
});

module.exports = tickets;
