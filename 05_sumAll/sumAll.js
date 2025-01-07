const sumAll = function (start, end) {
    let sumTotal = 0;
    let num;
    if (start > end) {
      for (let i = end; i <= start; i++) {
        sumTotal += i;
      }
    } else if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        sumTotal = "ERROR"
    } else {
      for (let i = start; i <= end; i++) {
        sumTotal += i;
      }
    }
    return sumTotal;
  };

sumAll(10000, 4000);

// Do not edit below this line
module.exports = sumAll;
