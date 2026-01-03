function findTheDigitsCounts(term) {
  let currentNumber = term;
  let totalDigit = 0;

  while (currentNumber > 0) {
    const reminder = currentNumber % 10;
    currentNumber = (currentNumber - reminder) / 10;
    totalDigit = totalDigit + 1;
  }
  return totalDigit;
}

function calculateSumOfPowerOfDigit(term) {
  let currentNumber = term;
  let sum = 0;
  let totalDigit = findTheDigitsCounts(term);
  let counter = totalDigit;
  
  while (counter > 0) {
    const remainder = currentNumber % 10;
    sum = sum + (remainder ** totalDigit);
    currentNumber = (currentNumber - remainder) / 10;
    counter = counter - 1;
  }
  return sum;
}

function isArmstrong(armstrongCandidate,sum) {
  return sum === armstrongCandidate;
}

function testIsArmstrong(armstrongCandidate, expectedValue) {
  const sum = calculateSumOfPowerOfDigit(armstrongCandidate);
  const isItArmstrong = isArmstrong(armstrongCandidate, sum);
  const checkValue = isItArmstrong === expectedValue ? "✅" : "❌";

  console.log(checkValue, isItArmstrong, expectedValue);
}

function testAll() {
  testIsArmstrong(153, true);
  testIsArmstrong(21, false);
  testIsArmstrong(370, true);
  testIsArmstrong(371, true);
  testIsArmstrong(407, true);
  testIsArmstrong(45, false);
  testIsArmstrong(57, false);
}

testAll();