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

function findAllPrimes(startOfRange, endOfRange) {
  let allPrimes = "";

  for (let term = startOfRange; term <= endOfRange; term++) {
    if (isPrime(term)) {
      allPrimes = allPrimes + term + " ";
    }
  }

  return allPrimes;
}

function testFindAllPrimes(startOfRange, endOfRange, expectedValue) {
  const rangeOfPrime = findAllPrimes(startOfRange, endOfRange);
  const checkValue = rangeOfPrime === expectedValue ? '✅' : '❌';

  console.log(checkValue, rangeOfPrime, expectedValue);
}

function testAll(){
  testFindAllPrimes(1, 4, "2 3 ");
  testFindAllPrimes(1, 9, "2 3 5 7 ");
  testFindAllPrimes(1, 15, "2 3 5 7 11 13 ");
  testFindAllPrimes(7, 15, "7 11 13 ");
  testFindAllPrimes(7, 25, "7 11 13 17 19 23 ");
  testFindAllPrimes(0, 2, "2 ");
}

testAll();