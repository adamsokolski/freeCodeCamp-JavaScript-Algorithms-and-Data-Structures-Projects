function checkCashRegister(price, cash, cid) {
  let neededChange = cash - price;
  let returnObj = {
    status: "",
    change: [],
  };

  // Amount of money in drawer
  let cashInDrawer = cid.reduce((a, b) => a + parseFloat(b[1]), 0);
  cashInDrawer = parseFloat(cashInDrawer.toFixed(2));

  if (cashInDrawer < neededChange) {
    // Not enough money
    returnObj.status = "INSUFFICIENT_FUNDS";
  } else if (cashInDrawer === neededChange) {
    // All the money from drawer
    returnObj.status = "CLOSED";
    returnObj.change = cid;
  } else if (calculateChange(neededChange, cid).length > 0) {
    // Can give change
    returnObj.status = "OPEN";
    returnObj.change = calculateChange(neededChange, cid);
  } else {
    // Cannot return exact change
    returnObj.status = "INSUFFICIENT_FUNDS";
  }

  return returnObj;
}

function calculateChange(change, cid) {
  let arr = [];
  const unitValue = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  // Copy and reverse change array to start from biggest value
  let cidArr = [...cid];
  cidArr.reverse();

  for (const element of cidArr) {
    let valueOfCurrentUnit = unitValue[element[0]];
    let sumValueOfCurrentUnit = element[1];

    if (valueOfCurrentUnit <= change && sumValueOfCurrentUnit != 0) {
      // [unitName, amountTakenFromDrawer]
      let unitArr = [element[0], 0];

      while (valueOfCurrentUnit <= change && sumValueOfCurrentUnit != 0) {
        // Substract money from change
        change -= valueOfCurrentUnit;
        change = parseFloat(change.toFixed(2));

        // Keep track how much money left in drawer
        sumValueOfCurrentUnit -= valueOfCurrentUnit;

        // Keep track how much money was taken
        unitArr[1] += valueOfCurrentUnit;
      }
      arr.push(unitArr);
    }
  }

  // Check if it is enough money
  let availableChange = arr.reduce((a, b) => a + parseFloat(b[1]), 0);
  if (availableChange < change) {
    arr = [];
  }

  return arr;
}
