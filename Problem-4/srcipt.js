function countMultiples(arr) {
  const result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }
  return result;
}


const inputArr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log('Problem 4:', countMultiples(inputArr));

//I have an array of numbers, and I want to find out how many of them are divisible by each number from 1 to 9.
//  So I go through numbers 1 to 9, and for each one, I check how many elements in the array are divisible by it. If a number divides another with no remainder, it's a multiple