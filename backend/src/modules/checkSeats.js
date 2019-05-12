function checkSeats(inputNumber) {
  let filteredArray = [];
  let isGap = false;

  decToBin(inputNumber).forEach((seat, index) => {
    
    //creates filtered array with indexes of taken seats
    if (seat) {
      filteredArray.push(index);
    }
  });

  //check if there is now single gap between seats (indexes numbers)
  for (i = 1; i < filteredArray.length; i++) {
    if (filteredArray[i] - filteredArray[i - 1] === 2) {
      isGap = true;
    }
  }

  return !isGap;
}

//converts input decimal number to binary
function decToBin(inputDec) {
  let binaryArray = [];

  while (inputDec > 0) {
    const numberToPush = inputDec % 2;
    binaryArray.unshift(numberToPush);
    inputDec = Math.floor(inputDec / 2);
  }
  return binaryArray;
}

exports.checkSeats = checkSeats;
