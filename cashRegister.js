function checkCashRegister(price, cash, cid) {
    let neededChange = cash - price
    let returnObj = {
      status: '',
      change: []
    }
    let cashInDrawer = cid.reduce((a, b) => a + parseFloat(b[1]), 0)
    cashInDrawer = parseFloat(cashInDrawer.toFixed(2))
    if (cashInDrawer < neededChange) {
      returnObj.status = 'INSUFFICIENT_FUNDS'
    } else if (cashInDrawer === neededChange) {
      returnObj.status = 'CLOSED'
      returnObj.change = cid
    } else if (calculateChange(neededChange, cid) === []) { 
      returnObj.status = 'INSUFFICIENT_FUNDS'
    } else {
      returnObj.status = 'OPEN'
      returnObj.change = calculateChange(neededChange, cid)
    }
  
   
    
    return returnObj; 
  }
  
  function calculateChange(change, cid) {
    let arr = []
    const unitValue = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    }
    let cidArr = [...cid]
    cidArr.reverse()
    for (const element of cidArr) {
      // console.log(element[1], unitValue[element[0]])
        let valueOfCurrentUnit = unitValue[element[0]]
        let sumValueOfCurrentUnit = element[1]
      
      if (valueOfCurrentUnit <= change && sumValueOfCurrentUnit != 0) {
        
        let unitArr = [element[0], 0]
        // console.log(change, unitValue[element[0]])
        while (valueOfCurrentUnit <= change && sumValueOfCurrentUnit != 0) {
           change -= valueOfCurrentUnit
           change = parseFloat(change.toFixed(2))
           console.log({change})
           sumValueOfCurrentUnit -= valueOfCurrentUnit
           unitArr[1] += valueOfCurrentUnit 
        }
        arr.push(unitArr)
        
      }
      
        
    }
    let availableChange = arr.reduce((a, b) => a + parseFloat(b[1]), 0)
    if (availableChange < change) {
      arr = []
    }
    
    return arr
  }
  
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))