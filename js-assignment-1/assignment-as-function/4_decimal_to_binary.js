function decimalToBinary(numberToConvert) {
  let binaryNumber = '';

  if (numberToConvert === 0) {
    binaryNumber = binaryNumber + 0;
  }

  while (numberToConvert !== 0) {
    const bit = numberToConvert % 2;
    numberToConvert = (numberToConvert - bit) / 2;
    binaryNumber = binaryNumber + bit;
  }

  return binaryNumber;
}

function testDecimalToBinary(numberToConvert, expectedResult) {
  const binaryValue = decimalToBinary(numberToConvert);
  const checkValue = binaryValue === expectedResult ?  '✅' : '❌' ;

  console.log(checkValue, binaryValue, expectedResult);
}

function testAllCases(){
  testDecimalToBinary(0, '0');
  testDecimalToBinary(10, '0101');
  testDecimalToBinary(5, '101');
}

testAllCases();