/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function fizzBuzz(number) {
  // Implementation here.
  let result = "";

  if(isDivisibleByNumber(number, 3)) {
    result = result + "fizz";
  }

  if(isDivisibleByNumber(number, 5)) {
    result = result + "buzz";
  }

  if(result === "") {
    result = result + number;
  }
  return result;
}

function isDivisibleByNumber(number, divisor) {
  return number % divisor === 0;
}

function testFizzBuzz(number, expectedValue) {
  const result = fizzBuzz(number);
  const checkValue = result === expectedValue ? "✅" : "❌";

  console.log(checkValue, result, expectedValue);
}

function testAll(){
  testFizzBuzz(3, "fizz");
  testFizzBuzz(7, "7");
  testFizzBuzz(0, "fizzbuzz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(30, "fizzbuzz");
  testFizzBuzz(10, "buzz");
  testFizzBuzz(11, "11");
}

testAll();