/*
  Implement the below function to count number of vowels present in the
  give sentence.
  Examples:
  countVowels("hello world") returns 3
  countVowels("hEllo wOrld") returns 3
*/

function countVowels(sentence) {
  // Implementation here.
  let count = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (isVowel(sentence[index])) {
      count = count + 1;
    }
  }

  return count;
}

function isVowel(letter) {
  const vowels = "aeiouAEIOU";
  
  for (let index = 0; index < vowels.length; index++) {
    if (letter === vowels[index]) {
      return true;
    }
  }
}

function consoleMessage(string, checkValue, calculatedValue, expectedValue) {
  const inputFragment = '"' + string + '"';
  const actualFragment = "Result is " + calculatedValue;
  const expectedFragment = "Expected is " + expectedValue;

  console.log(checkValue, inputFragment, actualFragment, expectedFragment);
}

function testCountVowels(string, expectedValue) {
  const result = countVowels(string);
  const checkValue = result === expectedValue ? "✅" : "❌";

  consoleMessage(string, checkValue, result, expectedValue);
}

function testAll() {
  testCountVowels("hello", 2);
  testCountVowels("aeiou", 5);
  testCountVowels("hEllo", 2);
  testCountVowels("hEllo wOrld", 3);
  testCountVowels("bcdd", 0);
  testCountVowels("", 0);
}

testAll();