/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

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

function testSlice(text, start, end, expectedValue) {
  const result = slice(text, start, end);
  const checkValue = result === expectedValue ? "✅" : "❌";

  console.log(checkValue, result, expectedValue);
}

function testAll() {
  testSlice('hello world', 0, 0, 'h');
  testSlice('negative start', -1, 8, 'negative ');
  testSlice('', 1, 8, '');
  testSlice('doraemon', 0, 3, 'dora');
  testSlice('operation starts', -2, 20, 'operation starts');
  testSlice('hello world', 0, 4, 'hello');
  testSlice('negative start', -1, 8, 'negative ');
  testSlice('negative start', -2, 7, 'negative');
  testSlice('negative start', 9, 50, 'start');
  testSlice('', 0, 10, '');

}

testAll();