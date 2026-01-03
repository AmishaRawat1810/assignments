/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isStringAt(string, substring) {
  const start = string.length - substring.length;

  if (substring.length === 0) {
    return false;
  }

  for (let term = 0; term < string.length; term++) {
    if (string[term + start] !== substring[term]) {
      return false;
    }
  }
  return true;
}

function endsWith(string, substring) {
  // Implementation here.
  return isStringAt(string, substring);
}

function testEndsWith(string, substring, expectedValue) {
  const doesItEndsWith = endsWith(string, substring);
  const checkValue = doesItEndsWith === expectedValue ? "✅" : "❌";

  console.log(checkValue, doesItEndsWith, expectedValue)
}

function testAll() {
  testEndsWith('hello world', 'World', false);
  testEndsWith('is it good?', 'ood?', true);
  testEndsWith('come inside!', 'come', false);
  testEndsWith('start! 1 2 3', '2 3', true);
  testEndsWith('123', '12', false);
  testEndsWith('ss', '', false);
  testEndsWith('pradip', 'dip', true);
  testEndsWith('kk', '', false);
  testEndsWith('abc', 'pp', false);
}

testAll();