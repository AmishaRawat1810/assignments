/*
  Implement the below function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubstring(string, subString) {
  // Implementation here.

  const endOfRange = string.length - subString.length; //if strlength is 10 and substrlength is 3 then the last possible index to match would be 7

  if(subString.length === 0) {
    return false;
  }

  for (let strIndex = 0; strIndex <= endOfRange; strIndex++) {
    let subStrIndex = 0;


    while (subStrIndex < subString.length && string[strIndex + subStrIndex] === subString[subStrIndex]) {
      subStrIndex++;
    }

    if (subStrIndex === subString.length) {
      return true;
    }
  }

  return false;
}

function consoleMessage(checkValue, calculatedValue, expectedValue) {
  console.log("Check |  OUTPUT | Expectation |");
  const space = "     ";
  console.log(checkValue, space, calculatedValue, space, expectedValue);
}

function testIsSubstring(string, subString, expectedValue) {
  const isItSubString = isSubstring(string, subString);
  const checkValue = isItSubString === expectedValue ? "✅" : "❌";
  consoleMessage(checkValue, isItSubString, expectedValue);
}

function testAll() {
  testIsSubstring('aaabbbcbcd', 'bcc', false);
  testIsSubstring('hello world', 'worl', true);
  testIsSubstring('not found', 'fi', false);
  testIsSubstring('start! 1 2 3', '1 2 3', true);
  testIsSubstring('take it!', 't!', true);
  testIsSubstring('you can do it!', 'cannot', false);
  testIsSubstring('ababa', 'ababhshs', false);
  testIsSubstring('helllo', 'llo', true);
  testIsSubstring('abcbcd', 'bcc', false);
  testIsSubstring('hello', 'loo', false);
}

testAll();