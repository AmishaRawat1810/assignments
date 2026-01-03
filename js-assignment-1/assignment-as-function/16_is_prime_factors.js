function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function findingPrimeFactors(term) {
  let currentNumber = term;
  let divisor = 2;
  let primeFactors = "";

  while ( divisor <= term ){
    if(isDivisible(currentNumber,divisor)){
      primeFactors = primeFactors + divisor + " ";
      currentNumber = currentNumber / divisor;
    } else {
      divisor = divisor + 1;
    }
  }
  return primeFactors;
}

function testFindingPrimeNumber(term, expectedValue) {
  const primeFactors = findingPrimeFactors(term);
  const checkValue = primeFactors === expectedValue ? "✅" : "❌";
  
  console.log(checkValue, primeFactors, expectedValue);
}

function testAll() {
  testFindingPrimeNumber(12,"2 2 3 ");
  testFindingPrimeNumber(2,"2 ");
  testFindingPrimeNumber(21,"3 7 ");
  testFindingPrimeNumber(120,"2 2 2 3 5 ");
  testFindingPrimeNumber(36,"2 2 3 3 ");
}

testAll();