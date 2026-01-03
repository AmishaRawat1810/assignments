function minOfTwo(termOne, termTwo) {
  return ( termOne > termTwo ) ? termTwo : termOne;
}

function hasFactor(termOne, termTwo, min) {
  return ((termOne % min === 0) && (termTwo % min === 0))
}

function calculateHcf(termOne, termTwo) {
  let min = minOfTwo(termOne, termTwo);

  while (min > 0) {
    if (hasFactor(termOne, termTwo, min)) {
      return min;
    }
    min = min - 1;
  }

}

function testHcfOfTwoNumber(termOne, termTwo, expectedValue) {
  const hcf = calculateHcf(termOne, termTwo);
  const checkValue = hcf === expectedValue ? "✅" : "❌";

  console.log(checkValue, hcf, expectedValue);
}

function testAll() {
  testHcfOfTwoNumber(2, 4, 2);
  testHcfOfTwoNumber(8, 4, 4);
  testHcfOfTwoNumber(100, 50, 50);
  testHcfOfTwoNumber(10, 15, 5);
}

testAll();