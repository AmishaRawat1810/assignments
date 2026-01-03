function isDivisibleByFour(year) {
  return year % 4 === 0;
}

function isCenturyYear(year) {
  return year % 100 === 0;
}

function isDivisibleByFourHundred(year) {
  return year % 400 === 0;
}

function isLeapYear(year) {
  return (isDivisibleByFour(year) && !isCenturyYear(year) || isDivisibleByFourHundred(year));
}

function testIsLeapYear(year, expectedValue) {
  const isItLeapYear = isLeapYear(year);
  const checkValue = isItLeapYear === expectedValue ? "✅" : "❌";

  console.log(checkValue, isItLeapYear, expectedValue);
}

function testAll() {
  testIsLeapYear(400, true);
  testIsLeapYear(1600, true);
  testIsLeapYear(2025, false);
  testIsLeapYear(100, false);
  testIsLeapYear(2000, true);
}

testAll();