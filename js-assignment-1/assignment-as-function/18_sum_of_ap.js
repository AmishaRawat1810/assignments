function calculateSumOfAp(a, d, n) {
  let sumOfAp = a;
  let nextTerm = a + d;

  for (let start = 1; start < n; start++) {
    sumOfAp = sumOfAp + nextTerm;
    nextTerm = nextTerm + d;
  }

  return sumOfAp;
}

function testSumOFAp(a, d, n, expectedValue) {
  const sumOfAp = calculateSumOfAp(a, d, n);
  const checkValue = sumOfAp === expectedValue ? "✅" : "❌";

  console.log(checkValue, sumOfAp, expectedValue);
}

function testAll() {
  testSumOFAp(2, 3, 5, 40);
  testSumOFAp(10, -2, 4, 28);
  testSumOFAp(-5, 2, 6, 0);
  testSumOFAp(7, 1, 1, 7);
  testSumOFAp(1, 1, 100, 5050);
}

testAll();