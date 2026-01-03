/*
  Implement the below function to trim(remove all leading and trailing 
  whitespaces) from the given sentence.
  A whitespace is SPACE(" "), NEW LINE("\n"), TAB("\t")
  Examples:
  reverseString(" hello world\n") returns "hello world"
*/

function trim(sentence) {
  // Implementation here.
  let result = "";
  let actualStart = findingStart(sentence);
  let actualEnd = findingEnd(sentence);

  if (sentence.length === 0) {
    result = "";
  }

  for (let index = actualStart; index <= actualEnd; index++) {
    result = result + sentence[index];
  }

  return result;
}

function findingStart(sentence) {
  let actualStart = 0;

  while (actualStart < sentence.length && checkWhiteSpace(sentence[actualStart])) {
    actualStart++;
  }

  return actualStart;
}

function findingEnd(sentence) {
  let actualEnd = sentence.length - 1;

  while (actualEnd >= 0 && checkWhiteSpace(sentence[actualEnd])) {
    actualEnd--;
  }

  return actualEnd;
}

function checkWhiteSpace(term) {
  return term === " " || term === "\n" || term === "\t";
}

function composeMessage(string, checkValue, calculatedValue, expectedValue) {
  const inputFragment = '"' + string + '"' + "\n";
  const actualFragment = "Result is " + calculatedValue + "\n";
  const expectedFragment = "Expected is " + expectedValue + "\n";

  console.log(checkValue, inputFragment, actualFragment, expectedFragment);
}

function testTrim(string, expectedValue) {
  const result = trim(string);
  const checkValue = result === expectedValue ? "✅" : "❌";

  composeMessage(string, checkValue, result, expectedValue);
}

function testAll() {
  testTrim("   hello   ", "hello");
  testTrim("          \n\n aeiou \n\n", "aeiou");
  testTrim("\t\t\thEllo\t\t\t ", "hEllo");
  testTrim(" hEllo   wOrld", "hEllo   wOrld");
  testTrim(" bcdd ", "bcdd");
  testTrim("123 ", "123");
  testTrim("", "");
  testTrim(" ", "");
  testTrim(" a", "a");
  testTrim("ab ", "ab");
  testTrim(" abc ", "abc");
  testTrim("abbc ", "abbc");
  testTrim(" bbbb", "bbbb");
  testTrim("WER", "WER");
  testTrim("hello\n", "hello");
  testTrim("\tnoooooo", "noooooo");
  testTrim(" good morning", "good morning");
  testTrim("\t\t\t\t\n", "");
}

testAll();