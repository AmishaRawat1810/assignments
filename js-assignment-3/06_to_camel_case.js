/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/

function toCamelCase(sentence) {
  // Implementation here.
  const clearedSentence = trim(sentence);
  let sentenceInLower = sentenceToLowerCase(clearedSentence);
  const camelCaseSentence = changeToCamelCase(sentenceInLower);

  return camelCaseSentence;
}

function changeToCamelCase(text) {
  let inCamelCase = "";

  for (let index = 0; index < text.length; index++) {
    if (checkUnderScore(text[index])) {
      index = removeUnderscore(text, index);
      if (index < text.length) {
        inCamelCase = inCamelCase + toUpperCase(text[index]);
      }
    } else {
      inCamelCase = inCamelCase + text[index];
    }
  }

  return inCamelCase;
}

function removeUnderscore(sentence, index) {
  while (index < sentence.length && checkUnderScore(sentence[index])) {
    index++;
  }

  return index;
}

function trim(sentence) {
  // Implementation here.
  let result = "";
  const actualStart = findingStart(sentence);

  if (sentence.length === 0) {
    result = "";
  }

  for (let index = actualStart; index < sentence.length; index++) {
    result = result + sentence[index];
  }

  return result;
}

function findingStart(sentence) {
  let actualStart = 0;

  while (actualStart < sentence.length && checkUnderScore(sentence[actualStart])) {
    actualStart++;
  }

  return actualStart;
}

function checkUnderScore(term) {
  return term === "_";
}

function sentenceToLowerCase(sentence) {
  let sentenceInLower = "";

  for (let index = 0; index < sentence.length; index++) {
    sentenceInLower = sentenceInLower + toLowerCase(sentence[index]);
  }

  return sentenceInLower;
}

function toLowerCase(letter) {
  const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";

  for (let index = 0; index < alphabetUpperCase.length; index++) {
    if (alphabetUpperCase[index] === letter) {
      return alphabetLowerCase[index];
    }
  }

  return letter;
}

function toUpperCase(letter) {
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let index = 0; index < alphabetLowerCase.length; index++) {
    if (alphabetLowerCase[index] === letter) {
      return alphabetUpperCase[index];
    }
  }

  return letter;
}

function composeMessage(string, checkValue, calculatedValue, expectedValue) {
  const inputFragment = '"' + string + '"' + "\n";
  const actualFragment = "Result is " + calculatedValue + "\n";
  const expectedFragment = "Expected is " + expectedValue + "\n";

  console.log(checkValue, inputFragment, actualFragment, expectedFragment);
}

function testCamleCase(string, expectedValue) {
  const result = toCamelCase(string);
  const checkValue = result === expectedValue ? "✅" : "❌";

  composeMessage(string, checkValue, result, expectedValue);
}

function testAll() {
  testCamleCase("hello_wORLd_pro1gram", "helloWorldPro1gram")
  testCamleCase("", "")
  testCamleCase("hello", "hello")
  testCamleCase("HELLO", "hello")
  testCamleCase("hello_world", "helloWorld")
  testCamleCase("this_is_a_test", "thisIsATest")
  testCamleCase("HeLLo_WoRLD_Test01", "helloWorldTest01")
  testCamleCase("_hello", "hello");
  testCamleCase("_to_camel_case_", "toCamelCase");
  testCamleCase("_to_camel__case", "toCamelCase");
}

testAll();