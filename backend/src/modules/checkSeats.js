const inputNumber = 54;

//const binaryArray =  decToBin(inputNumber);

function checkSeats(inputNumber) {
  let filteredArray = [];
  let isGap = false;

  decToBin(inputNumber).forEach((seat, index) => {
    if (seat) {
      //console.log(`seat: ${seat}, index: ${index}`);
      filteredArray.push(index);
    }
  });

  //console.log(filteredArray);

  for (i = 1; i < filteredArray.length; i++) {
    if (filteredArray[i] - filteredArray[i - 1] === 2) {
      //console.log(filteredArray[i]);
      isGap = true;
    }
  }

  //console.log(isGap);

  return !isGap;
}

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