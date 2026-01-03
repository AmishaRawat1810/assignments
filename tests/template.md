function consoleMessage(description, term, result, expectedResult) {
  const inputFragment = "[" + term + "]" + "\n";
  const actualFragment = "Result is " + result + "\n";
  const expectedFragment = "Expected is " + expectedResult + "\n";
  let checkValue = result === expectedResult;
  const symbol = checkValue ? "✅ " : "❌ ";
  let message = symbol + description;

  if (!checkValue) {
    message = symbol + description + inputFragment + actualFragment + expectedFragment;
  }

  console.log(message);
}

function test(description, term, expectedResult) {
  const result = nthFibonacciTerm(term);

  consoleMessage(description, term, result, expectedResult);
}

function testAll() {
  test();
  test();
  test();
  test();
  test();
}

testAll();