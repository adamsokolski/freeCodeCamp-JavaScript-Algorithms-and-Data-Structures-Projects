function convertToRoman(num) {
    let basicCombinations = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM'
    }
  
    let decimalsArr = []
    let romansArr = []
    let digitsArr = num.toString().split('')
    digitsArr.reverse()

    let j = 1
    // Convert ['1', '2', '3'] into [3, 20, 100]
    for (const digit of digitsArr) {
        let multiplier = parseInt(digit)
        decimalsArr.push(multiplier * j)
        j *= 10  
    }

    // Iterate through decimals and covert them to roman numerals
    for (let i = 0; i < decimalsArr.length; i++) {
        let index = decimalsArr[i]
        let number = basicCombinations[index]
        romansArr.unshift(number)
    }

 return romansArr.join('');
}
