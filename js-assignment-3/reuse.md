function consoleMessage(string, subString, checkValue, calculatedValue, expectedValue) {
  const inputFragment = '"' + string + "," + subString + '"';
  const actualFragment = "Result is " + calculatedValue;
  const expectedFragment = "Expected is " + expectedValue;
  console.log(checkValue, inputFragment, actulFragment, expectedFragment);
}

function testIsSubstring(string, subString, expectedValue) {
  const isItSubString = isSubstring(string, subString);
  const checkValue = isItSubString === expectedValue ? "✅" : "❌";
  consoleMessage(string, subString, checkValue, isItSubString, expectedValue);
}

function testAll(){

}

testAll();