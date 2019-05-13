const { checkSeats } = require("./checkSeats");

function randomSeats() {
  let isCorrect = false;
  let rowTakenSeats;

  while (!isCorrect) {
    rowTakenSeats = Math.floor(Math.random() * 511);
    isCorrect = checkSeats(rowTakenSeats);
    console.log(`Random number is: ${rowTakenSeats} and it is: ${isCorrect}`);
  }
  console.log(`row taken seats is: ${rowTakenSeats}`);
  return rowTakenSeats;
}

exports.randomSeats = randomSeats;
