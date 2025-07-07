function conditionalOddSeries(a) {
  let count = a % 2 === 0 ? a - 1 : a;
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(1 + 2 * i);
  }
  return result;
}


console.log('Problem 3 (a=4):', conditionalOddSeries(4)); // [1, 3, 5]
console.log('Problem 3 (a=5):', conditionalOddSeries(5)); // [1, 3, 5, 7, 9] logic

