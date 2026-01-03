/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function occurrences(string, substring) {
  let occurenceOfSubString = 0;
  const subStringLength = substring.length;
  let index = 0;

  while (index < string.length) {
    if (string[index] === substring[0]) {
      const newString = slice(string, index, index + subStringLength - 1);
      if(newString === substring) {
        occurenceOfSubString = occurenceOfSubString + 1;
      }
    }
    index = index + 1;
  }

  return occurenceOfSubString;
}

function slice(text, start, end) {
  // Implementation here.
  const startOfRange = start < 0 ? 0 : start;
  let slicedString = "";

  if (end >= text.length) {
    end = text.length - 1;
  }
  
  for (let term = startOfRange; term <= end; term++) {
    slicedString = slicedString + text[term];
  }

  return slicedString;
}

function testOccurrences(string, subString, expectedValue) {
  const result = occurrences(string, subString);
  const checkValue = result === expectedValue ? "✅" : "❌";

  console.log(checkValue, result, expectedValue);
}

function testAll(){
  testOccurrences('hello world', 'zebra', 0);
  testOccurrences('hello world', 'world', 1);
  testOccurrences('hello world', 'll', 1);
  testOccurrences('12 334 12', '12', 2);
  testOccurrences('aaabba', 'a', 4);
  testOccurrences('hahahaha', 'haha', 3);
  testOccurrences('hellll', 'll', 3);
}

testAll();