function telephoneCheck(str) {
    let mainRegex = /(.{0,2})(?:[\ (]{0,2})(\d{3})(?:[-\s)]*)(\d{3})(?:[-\s]?)(\d{4})/g
    let bracketsRegex = /[()]/g
    let brackets = str.match(bracketsRegex);
    let countryCode = parseInt(str.replace(mainRegex, '$1'))
    let phoneNumber = str.replace(mainRegex, '$2$3$4')
    let isValid = false
  
    // If str contains only one bracket that means it's invalid
    if (brackets != null && brackets.length === 1) {
      return false
    }
  
    if (phoneNumber.length === 10) {
      if (isNaN(countryCode) || countryCode === 1) {
        isValid = true
      } 
    }
  
    return isValid;
  }
  