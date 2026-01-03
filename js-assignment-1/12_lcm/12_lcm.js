// Do not rename a or b, use them as input for your program.
// While testing we will change their values.
// a and b will be always 0 or greater.
const termOne = 0;
const termTwo = 1;

// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let lcm = 0;
let hasMultiple = false;
let max = termOne > termTwo ? termOne : termTwo;

while (hasMultiple === false) {
  if ((max % termOne === 0) && (max % termTwo === 0)) {
    lcm = max;
    hasMultiple = true;
  }
  max = max + 1;
}

console.log(lcm);