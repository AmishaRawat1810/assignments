function calculatedFibonacciSeries(upToTerm) {
  let currentTerm = 0;
  let nextTerm = 1;
  let fibonacciTerms = "";

  for (let counter = 0; counter < upToTerm; counter++) {
    fibonacciTerms = fibonacciTerms + currentTerm + " ";
    nextTerm = nextTerm + currentTerm;
    currentTerm = nextTerm - currentTerm;
  }
  return fibonacciTerms;
}

function testFibonacciSeries(upToTerm, expectedValue) {
  const fibonacciSeries = calculatedFibonacciSeries(upToTerm);
  const checkValue = fibonacciSeries === expectedValue ?   '✅' : '❌' ;

  console.log(checkValue, fibonacciSeries, expectedValue);
}

function testAll() {
  testFibonacciSeries(1, "0 ");
  testFibonacciSeries(2, "0 1 ");
  testFibonacciSeries(3, "0 1 1 ");
  testFibonacciSeries(4, "0 1 1 2 ");
  testFibonacciSeries(5, "0 1 1 2 3 ");
}

testAll();