function convertToRoman(num) {
  let decimalsArr = [];
  let romansArr = [];
  let digitsArr = num.toString().split("");
  digitsArr.reverse();

  let j = 1;
  // Convert ['1', '2', '3'] into [3, 20, 100]
  for (const digit of digitsArr) {
    let multiplier = parseInt(digit);
    decimalsArr.push(multiplier * j);
    j *= 10;
  }

  // Iterate through decimals and covert them to roman numerals
  for (let i = 0; i < decimalsArr.length; i++) {
    romansArr.unshift(decimalToRoman(decimalsArr[i], i));
  }

  return romansArr.join("");
}

function decimalToRoman(number, orderOfMagnitude) {
  let indexNumber = number / Math.pow(10, orderOfMagnitude);
  let convertedNumber = "";
  let letters = [];
  if (orderOfMagnitude === 0) letters = ["I", "V", "X"];
  else if (orderOfMagnitude === 1) letters = ["X", "L", "C"];
  else if (orderOfMagnitude === 2) letters = ["C", "D", "M"];
  else if (orderOfMagnitude === 3) return "M".repeat(indexNumber);

  if (indexNumber >= 1 && indexNumber <= 3) {
    // 1 - 3
    convertedNumber = letters[0].repeat(indexNumber);
  } else if (indexNumber === 4) {
    // 4
    convertedNumber = letters[0] + letters[1];
  } else if (indexNumber >= 5 && indexNumber <= 8) {
    // 5 - 8
    convertedNumber = letters[1];
    convertedNumber = convertedNumber.concat(
      "",
      letters[0].repeat(indexNumber - 5)
    );
  } else if (indexNumber === 9) {
    // 9
    convertedNumber = letters[0] + letters[2];
  }
  return convertedNumber;
}

console.log(convertToRoman(123));
