// Function which takes a ROT13 encoded string as input and returns a decoded string.
function rot13(str) {
  const alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const strArr = str.split("");
  const regex = /[A-Z]/;
  let convertedArr = [];
  for (const element of strArr) {
    // If current element is a letter shift it by 13 places
    if (regex.test(element)) {
      let index = alphabetArr.indexOf(element);
      if (index <= 12) {
        convertedArr.push(alphabetArr[index + 13]);
      } else {
        convertedArr.push(alphabetArr[index - 13]);
      }
    } else {
      convertedArr.push(element);
    }
  }
  return convertedArr.join("");
}
