// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 97;

// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let dividend = a;
let divisor = 2;

while ( divisor <= a ){
  if(dividend % divisor === 0){
    console.log(divisor);
    dividend = dividend / divisor;
  } else {
    divisor = divisor + 1;
  }
}