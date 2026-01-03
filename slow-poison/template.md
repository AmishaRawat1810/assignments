function consoleMessage(msg, result, expected) {
  const actualFragment = "\nCALCULATED : " + result;
  const expectedFragment = "\nEXPECTED   : " + expected;
  const checkValue = areEqual(result, expected);
  const symbol = checkValue ? "✅ " : "❌ ";
  let message = symbol + msg;

  if (!checkValue) {
    message += actualFragment + expectedFragment;
  }

  console.log(message);
}

function testAreEqual(msg, array1, array2, expected) {
  const result = areEqual(array1, array2);

  consoleMessage(msg, result, expected);
}

function main() {
  testAreEqual("Same length, element arrays", [1, 2, 3, 4], [1, 2, 3, 4], true);
}

main();