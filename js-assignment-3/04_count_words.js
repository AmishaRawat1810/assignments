/*
  Implement the below function to count the number of words
  in the given sentence.

  Rules:
  - A word is defined as a sequence of non-whitespace characters.
  - Whitespace includes SPACE(" "), TAB("\t"), and NEW LINE("\n").
  - Multiple consecutive whitespace characters should be treated
    as a single separator.
  - Leading and trailing whitespace should not affect the word count.

  Example:
  countWords("hello   \t   world \n test")
    -> 3
*/

function countWords(sentence) {
  // Implementation here.
  let totalWord = 0;
  let space = 0;
  
  for (let index = 0; index < sentence.length; index++) {
    if (!isWhiteSpace(sentence[index])) {
      space = 1;
    }

    if (isWhiteSpace(sentence[index]) && space === 1) {
      space++;
      totalWord++;
    }
  }

  if (space === 1) {
    totalWord = totalWord + 1;
  }

  return totalWord;
}

function isWhiteSpace(term) {
  return term === " " || term === "\n" || term === "\t";
}

function composeMessage(string, checkValue, calculatedValue, expectedValue) {
  const inputFragment = '"' + string + '"' + "\n";
  const actualFragment = "Result is " + calculatedValue + "\n";
  const expectedFragment = "Expected is " + expectedValue + "\n";

  console.log(checkValue, inputFragment, actualFragment, expectedFragment);
}

function testCountWords(string, expectedValue) {
  const result = countWords(string);
  const checkValue = result === expectedValue ? "✅" : "❌";

  composeMessage(string, checkValue, result, expectedValue);
}

function testAll() {
  testCountWords("hello ", 1);
  testCountWords("hello   \t   world \n test", 3);
  testCountWords("hello \t \t hi   world \n test", 4);
  testCountWords("hello \t  hello\t hi   world \n test", 5);
  testCountWords("hello \t\t\tt", 2);
}

testAll();