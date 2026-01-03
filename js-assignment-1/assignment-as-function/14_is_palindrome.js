function reverseANumber(term) {
  let currentNumber = term;
  let aReverse = 0;

  while (currentNumber > 0) {
    const remainder = currentNumber % 10;
    aReverse = (aReverse * 10) + remainder;
    currentNumber = (currentNumber - remainder) / 10;
  }
  return aReverse;
}

function isPalindrome(numberToCheck, reverseOfNumberToCheck) { 
  return numberToCheck === reverseOfNumberToCheck;
}

function testIsPalindrome(numberToCheck, expectedValue) {
  const reverseNumber = reverseANumber(numberToCheck);
  const isItPalindrome = isPalindrome(numberToCheck, reverseNumber);
  const checkValue = isItPalindrome === expectedValue ? "✅" : "❌";

  console.log(checkValue, isItPalindrome, expectedValue)
}

function testAll() {
  testIsPalindrome(131, true);
  testIsPalindrome(1323, false);
  testIsPalindrome(111, true);
  testIsPalindrome(1, true);
  testIsPalindrome(801, false);
  testIsPalindrome(100, false);
}

testAll();