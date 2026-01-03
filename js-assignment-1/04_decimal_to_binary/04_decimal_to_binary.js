// Do not rename a, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const a = 0;

// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let numberToConvert = a;

if (numberToConvert === 0) {
  console.log(numberToConvert);
}

while (numberToConvert !== 0) {
  const remainder = numberToConvert % 2;
  numberToConvert = (numberToConvert - remainder) / 2;
  console.log(remainder);
}