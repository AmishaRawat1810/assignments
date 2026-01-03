function findIndex(text, target) {
  // Implementation here.

  for (let counter = 0; counter < text.length; counter++) {
    if (text[counter] === target) {
      return counter;
    }
  }

  return -1;
}

function testFindIndex(text, target, expectedValue) {
  const result = findIndex(text, target);
  const checkValue = result === expectedValue ? "✅" : "❌";

  console.log(checkValue, result, expectedValue);
}

function testAll() {
  testFindIndex('hello', 'e', 1);
  testFindIndex('mango', 'o', 4);
  testFindIndex('is it you?', '?', 9);
  testFindIndex('grab it!', 'p', -1);
  testFindIndex('12344', '3', 2);
  testFindIndex('repeating !!!', '!', 10);
  testFindIndex('repeating', 'i', 6);
}

testAll();