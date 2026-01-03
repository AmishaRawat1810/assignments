function convertToEven(term) {
  return term % 2 === 0  ? term : (term + 1);
}

function isEven(startOfTheRange, endOfTheRange){
  let isEven = convertToEven(startOfTheRange);
  let evenNumbers = "";

  for (let term = isEven; term <= endOfTheRange; term = term + 2) {
    evenNumbers = evenNumbers + term + " ";
  }

  return evenNumbers;
}

function testIsEven(startOfRange, endOfRange, expectedValue) {
  const isEvenNumber = isEven(startOfRange, endOfRange);
  const checkValue = (isEvenNumber && expectedValue) ?  '✅' : '❌' ;

  console.log(checkValue, isEvenNumber, expectedValue);
}

function testAll(){
  testIsEven(2, 10, "2 4 6 8 10");
  testIsEven(0, 10, "2 4 6 8 10");
  testIsEven(5, 9, "6 8 10");
  testIsEven(10, 10, "10 ");
}

testAll();