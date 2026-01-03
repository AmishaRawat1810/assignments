function isDivisible(dividend, divisor) {
  return dividend % divisor === 0 ;
}

function isPrime(primeCandidate) {
  let isPrime = primeCandidate <= 1 ? false : true ;

  for (let divisor = 2; divisor * divisor <= primeCandidate; divisor++) {
    if (isDivisible(primeCandidate, divisor) && (primeCandidate !== 2)) {
      isPrime = false;
    }
  }
  
  return isPrime;
}

function testIsPrime(numberToCheck, expectedValue) {
  const isItPrime = isPrime(numberToCheck);
  const checkValue = isItPrime === expectedValue ? '✅' : '❌' ;

  console.log(checkValue, isItPrime, expectedValue);
}

function testAll(){
  testIsPrime(2, true);
  testIsPrime(1, false);
  testIsPrime(3, true);
  testIsPrime(4, false);
  testIsPrime(9, false);
  testIsPrime(53, true);
}

testAll();