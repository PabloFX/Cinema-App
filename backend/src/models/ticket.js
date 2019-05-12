const Joi = require("joi");

function validateTicket(tickets) {
  const schemaTicket = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    surname: Joi.string()
      .min(3)
      .max(50)
      .required(),
    mail: Joi.string()
      .email()
      .required(),
    date: Joi.number()
      .min(13)
      //.max(13)
      .required(),
    title: Joi.string()
      .min(2)
      .required(),
    seats: Joi.string()
      .min(3)
      .required(),
    price: Joi.number().required()
  };

  return Joi.validate(tickets, schemaTicket);
}

exports.validateTicket = validateTicket;