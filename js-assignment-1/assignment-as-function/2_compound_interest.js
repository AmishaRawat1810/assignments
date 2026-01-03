function calculateCompoundInterest(p, r, t) {
  let newPrinciple = p;

  for (let year = 1; year <= t; year++) {
    let interest = ( newPrinciple * r ) / 100 ;
    newPrinciple = newPrinciple + interest;
  }

  return newPrinciple - p;
}

function testCompoundInterest(p, r, t, expectedValue) {
  const compoundInterest = calculateCompoundInterest(p, r, t);
  const checkSymbol = isApproximatelyEqual(compoundInterest, expectedValue) ?  '✅' : '❌' ;
  
  console.log(checkSymbol, compoundInterest, expectedValue);
}

function isApproximatelyEqual(calculatedValue, expectedValue) {
  const difference = calculatedValue > expectedValue ? calculatedValue - expectedValue : expectedValue - calculatedValue ;
  return difference < 0.5;
}

function testAll(){
  testCompoundInterest(1000, 5, 3, 157.6);
  testCompoundInterest(2500, 10, 1, 250);
  testCompoundInterest(8000, 0, 4, 0);
  testCompoundInterest(100, 10, 2, 21);
  testCompoundInterest(1500, 20, 1, 300);
  testCompoundInterest(2500, 4, 2, 204);
  testCompoundInterest(10000, 2, 2, 404);
  testCompoundInterest(5000, 7, 10, 4835.76);
}

testAll();