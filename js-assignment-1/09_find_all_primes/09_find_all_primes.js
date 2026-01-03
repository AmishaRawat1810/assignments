// Do not rename startOfRange or endOfRange, use them as input for your program.
// While testing we will change their values.

const startOfRange = 2;
const endOfRange = 25;

// Print all prime numbers between startOfRange and endOfRange(both inclusive).
// For example, if startOfRange = 5 and endOfRange = 13, then the output should be
// 5
// 7
// 11
// 13
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

for (let dividend = startOfRange; dividend <= endOfRange; dividend++) {
  let isPrime = true;
  for (let divisor = 2; divisor < dividend; divisor++) {
    if (dividend % divisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime && (dividend > 1)) {
    console.log(dividend);
  }
}