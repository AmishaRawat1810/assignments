/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function replace(text, match, replacement) {
  // Implementation here.
  const endOfText = text.length;
  let textAfterReplacement = "";

  for (let term = 0; term < endOfText; term++) {
    if (text[term] === match) {
      textAfterReplacement = textAfterReplacement + replacement;
    } else {
      textAfterReplacement = textAfterReplacement + text[term];
    }
  }
  return textAfterReplacement;
}

function testReplace(text, match, replacement, expectedValue) {
  const result = replace(text, match, replacement, expectedValue);
  const checkValue = result === expectedValue ? "✅" : "❌";

  console.log(checkValue, result, expectedValue);
}

function testAll() {
  testReplace('helo', 'o', 'p', 'help');
  testReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
  testReplace('yistirday was fun', 'i', 'e', 'yesterday was fun');
  testReplace('potato tomato onion', 'o', 'a', 'patata tamata anian');
  testReplace('to to to', 't', 'g', 'go go go');
}

testAll();