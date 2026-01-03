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

function firstPrimeAbove(term) {
  let nextPrimeTerm = term + 1;

  while (isPrime(nextPrimeTerm) === false) {
    nextPrimeTerm = nextPrimeTerm + 1;
  }

  return nextPrimeTerm;
}

function testFirstPrimeAbove(currentPrimeTerm, expectedValue) {
  const nextPrimeTerm = firstPrimeAbove(currentPrimeTerm);
  const checkValue = nextPrimeTerm === expectedValue ? "✅" : "❌";

  console.log(checkValue, nextPrimeTerm, expectedValue);
}

function testAll() {
  testFirstPrimeAbove(13, 17);
  testFirstPrimeAbove(12, 13);
  testFirstPrimeAbove(20, 23);
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(42, 43);
}

testAll();