function factorial(numberToCheck) {
  let factorial = 1;

  for (let term = 1; term <= numberToCheck; term++) {
    factorial = factorial * term;
  }

  return factorial;
}

function testFactorial(numberToCheck, expectedValue) {
  const calculatedFactorial = factorial(numberToCheck);
  const checkValue = calculatedFactorial === expectedValue ?  '✅' : '❌' ;

  console.log(checkValue, calculatedFactorial, expectedValue);
}

function testAll(){
  testFactorial(0, 1);
  testFactorial(3, 6);
  testFactorial(5, 120);
  testFactorial(6, 720);
}

testAll();