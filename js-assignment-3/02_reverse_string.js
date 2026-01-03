/*
  Implement the below function to reverse the given sentence.
  Examples:
  reverseString("hello") returns "olleh"
*/

function reverseString(sentence) {
  // Implementation here.
  let reversed = "";

  for (let index = sentence.length - 1; index >= 0; index--) {
    reversed = reversed + sentence[index];
  }

  return reversed;
}

function composeMessage(string, checkValue, calculatedValue, expectedValue) {
  const inputFragment = '"' + string + '"' + "\n";
  const actualFragment = "Result is " + calculatedValue + "\n";
  const expectedFragment = "Expected is " + expectedValue + "\n";

  console.log(checkValue, inputFragment, actualFragment, expectedFragment);
}

function testReverseString(string, expectedValue) {
  const result = reverseString(string);
  const checkValue = result === expectedValue ? "✅" : "❌";

  composeMessage(string, checkValue, result, expectedValue);
}

function testAll() {
  testReverseString("hello", "olleh");
  testReverseString("aeiou", "uoiea");
  testReverseString("hEllo", "ollEh");
  testReverseString("hEllo wOrld", "dlrOw ollEh");
  testReverseString("bcdd", "ddcb");
  testReverseString("123", "321");
  testReverseString("", "");
  testReverseString(" ", " ");
  testReverseString("a", "a");
  testReverseString("ab", "ba");
  testReverseString("abc", "cba");
  testReverseString("abbc", "cbba");
  testReverseString("bbbb", "bbbb");
  testReverseString("WER", "REW");
}

testAll();