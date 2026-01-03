/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/

function toCamelCase(sentence) {
  // Implementation here.
  let sentenceInLower = sentenceToLowerCase(sentence);
  let camelCaseSentence = "";
  const start = sentence[0] === "_" ? 1 : 0;

  for (let index = start; index < sentenceInLower.length; index++) {
    if (sentenceInLower[index] === "_" && ) {
      camelCaseSentence = camelCaseSentence + toUpperCase(sentenceInLower[index + 1]);
      index = index + 1;
    } else {
      camelCaseSentence = camelCaseSentence + sentenceInLower[index];
    }
  }

  return removeAdjacentDuplicateSpaces(camelCaseSentence);
}

function removeAdjacentDuplicateSpaces(sentence) {
    // Implementation here.
    let result = "";
    let space = 1;

    for (let index = 0; index < sentence.length; index++) {
      if (isWhiteSpace(sentence[index]) && space === 1) {
        result = result + "";
        space++;
      }
      
      if (!isWhiteSpace(sentence[index])) {
        result = result + sentence[index];
        space = 1;
      }
    }
    return result;
}

function isWhiteSpace(term) {
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