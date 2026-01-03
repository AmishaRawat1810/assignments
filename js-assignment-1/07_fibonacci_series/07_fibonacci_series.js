// Do not rename n, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const n = 5;

// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const totalTerms = n;
let currentTerm = 0;
let nextTerm = 1;

for (let counter = 0; counter < totalTerms; counter++) {
  let fibonacciTerm = currentTerm;
  console.log(fibonacciTerm);
  fibonacciTerm = currentTerm + nextTerm;
  currentTerm = nextTerm;
  nextTerm = fibonacciTerm;
}