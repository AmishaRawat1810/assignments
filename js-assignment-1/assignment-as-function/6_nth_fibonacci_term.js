function NthFibonacciTerm(termToFind) {
  let firstTerm = 0;
  let secondTerm = 1;
  let fibonacciTerm = ( termToFind === 2 ) ? 1 : 0;

  for (let term = 2; term < termToFind ; term++) {
    fibonacciTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = fibonacciTerm;
  }

  return fibonacciTerm;
}

function testNthFibonacciTerm(termToFind, expectedValue) {
  const fibonacciTerm = NthFibonacciTerm(termToFind);
  const checkValue = (fibonacciTerm === expectedValue) ?  '✅' : '❌' ;

  console.log(checkValue, fibonacciTerm, expectedValue);
}

function testAll(){
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(6, 5);
  testNthFibonacciTerm(2, 1);
}

testAll();