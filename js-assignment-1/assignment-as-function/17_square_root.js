function calculateSquareRoot(term) {
  return term ** 0.5;
}

function testCalculateSquareRoot(givenNumber, expectedValue) {
  const squareRoot = calculateSquareRoot(givenNumber);
  const checkValue = isApproximatelyEqual(squareRoot, expectedValue) ? "✅" : "❌";

  console.log(checkValue, squareRoot, expectedValue);
}

function isApproximatelyEqual(termOne, termTwo) {
  const difference = termOne > termTwo ? termOne - termTwo : termTwo - termOne ;
  return difference < 0.5;
}

function testAll() {
  testCalculateSquareRoot(4, 2);
  testCalculateSquareRoot(1, 1);
  testCalculateSquareRoot(9, 3);
  testCalculateSquareRoot(7, 2.64);
  testCalculateSquareRoot(8, 2.82);
  testCalculateSquareRoot(2, 1.41);
}

testAll();