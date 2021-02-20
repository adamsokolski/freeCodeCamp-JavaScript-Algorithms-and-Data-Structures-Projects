// Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {

    // regex that finds single letters and digits
    let regex = /[a-z]|\d/g
    let strArr = str.split('')

    // Convert every letter to lower case to simplyfy comparing
    strArr = strArr.map(x => x.toLowerCase())

    // Filter elements of an array with regex
    strArr = strArr.filter(x => x.match(regex))

    // Copy an array and reverse it
    let rStrArr = [...strArr]
    rStrArr.reverse()

    let isPalindrome = true;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] != rStrArr[i]) {
            isPalindrome = false
            break
        }
    }
    return isPalindrome;
  }
   