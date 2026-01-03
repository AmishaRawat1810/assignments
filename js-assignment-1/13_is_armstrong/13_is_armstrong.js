// Do not rename a use it as input for your program.
// While testing we will change its values.

const a = 31; //370 , 371

// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let totalDigit = 0;
let term = a;
let sum = 0;

while (term > 0) {
  const reminder = term % 10;
  term = (term - reminder) / 10;
  totalDigit = totalDigit + 1;
}

term = a;
let counter = totalDigit;

while (counter > 0) {
  const remainder = term % 10;
  sum = sum + (remainder ** totalDigit);
  term = (term - remainder) / 10;
  counter = counter - 1;
}

const isArmstrong = a === sum;
console.log(isArmstrong);