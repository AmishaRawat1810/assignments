function maxOfTwo(termOne, termTwo) {
  return termOne > termTwo ? termOne : termTwo;
}

function hasAnyMultiple(termOne, termTwo, max) {
  return ((max % termOne === 0) && (max % termTwo === 0));
}

function calculateLcm(termOne, termTwo){
  const hasMultiple = false;
  let max = maxOfTwo(termOne, termTwo);

  while (hasMultiple === false) {
    if (hasAnyMultiple(termOne, termTwo, max)) {
      return max;
    }
    max = max + 1;
  }
}

function testCalculateLcm(termOne, termTwo, expectedValue) {
  const lcm = calculateLcm(termOne, termTwo);
  const checkValue = lcm === expectedValue ? "✅" : "❌";

  console.log(checkValue, lcm, expectedValue);
}

function testAll() {
  testCalculateLcm(5, 15, 15);
  testCalculateLcm(1, 9, 9);
  testCalculateLcm(10, 15, 30);
  testCalculateLcm(4, 5, 20);
}

testAll();