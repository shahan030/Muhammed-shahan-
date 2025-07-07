function generate() {
  let a = parseInt(document.getElementById("num").value);
  let result = [];

  for (let i = 0; i < a; i++) {
    result.push(1 + 2 * i);
  }

  document.getElementById("output").textContent = 
    result.length > 0 ? result.join(", ") : "Please enter a valid number.";
}

// Output: 
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1, 3


// When I want to create a list of odd numbers starting from 1, I know that the first odd number is always 1. 
// After that, each next odd number is just 2 more than the one before it. So, starting at 1, I add 2 to get 3, 
// then add 2 again to get 5, and so on. If I need, say, 
// 4 odd numbers, I just keep doing this addition four times: 1, 3, 5, 7. 
// It’s like stepping forward by 2 every time. Another way to think about it is using a formula:
//  the nth odd number is 1 plus 2 times (n minus 1). This means the first odd number is 1, the second is 3, and the third is 5. 
// I just loop through these calculations until I get the number of odd numbers I want.

