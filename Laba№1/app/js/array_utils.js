///// Sum of array elements
function sumArray(arr) {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum;
}


///// Filtered array containing only positive numbers
function positiveFilter(arr) {
  let positive = [];
  for (let el of arr) {
    if (el > 0) {
      positive.push(el);
    }
  }
  return positive;
}


///// Filtered array containing only negative numbers
function negativeFilter(arr) {
  let negative = [];
  for (let el of arr) {
    if (el < 0) {
      negative.push(el);
    }
  }
  return negative;
}

module.exports = { sumArray, positiveFilter, negativeFilter };