// Do not rename a, use them as input for your program.
// While testing we will change its values.

const a = 121;

// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let aReverse = 0;
let currentNumber = a;

while (currentNumber > 0) {
  const remainder = currentNumber % 10;
  aReverse = (aReverse * 10) + remainder;
  currentNumber = (currentNumber - remainder) / 10;
}

const isPalindrome = aReverse === a;
console.log(isPalindrome);