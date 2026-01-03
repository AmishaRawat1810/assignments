function simpleInterest(p, r, t){
  return (p * r * t) / 100;
}

function testSimpleInterest(p, r, t, expectedValue) {
  const calculatedSimpleInterest = simpleInterest(p, r, t);
  const checkSymbol = calculatedSimpleInterest === expectedValue ? '✅' : '❌' ;
  
  console.log(checkSymbol, calculatedSimpleInterest, expectedValue);
}

function testAll(){
  testSimpleInterest(1, 2, 10, 0.2);
  testSimpleInterest(0, 3, 5, 0);
  testSimpleInterest(10, 1, 10, 1);
  testSimpleInterest(6, 2, 10, 1.2);
  testSimpleInterest(10, 3, 10, 3);
  testSimpleInterest(0.1, 10, 3, 0.03);
}

testAll();