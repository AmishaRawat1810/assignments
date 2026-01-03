// Do not rename a, use it as input for your program.
// While testing we will change their values.
// a will be always 1 or greater.
const numberToCheck = 11;

// Print true(boolean) if a is prime otherwise print false(boolean). DO NOT print "true" or "false".
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let isPrime = true;

if (numberToCheck === 1) {
  isPrime = false;
}

for (let divisor = 2; divisor * divisor <= numberToCheck; divisor++) {
  if ((numberToCheck % divisor === 0) && (numberToCheck !== 2)) {
    isPrime = false;
  }
}

console.log(isPrime);