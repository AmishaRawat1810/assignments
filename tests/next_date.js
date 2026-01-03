function sliceDate(date, start, end) {
  return parseInt(date.slice(start, end));
}

function addPrecedingZeroes(text, length) {
  return text.padStart(length, "0");
}

function formatDate(day, month, year) {
  const paddedDay = addPrecedingZeroes(day + "", 2);
  const paddedMonth = addPrecedingZeroes(month + "", 2);
  const paddedYear = addPrecedingZeroes(year + "", 4);
  const date = paddedDay + "-" + paddedMonth + "-" + paddedYear;

  return date;
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  return (isDivisible(year, 4) && !isDivisible(year, 100)) || isDivisible(year, 400);
}

function isYearEnd(day, month) {
  return month === 12 && day === 31;
}

function lastDayOfMonth(month, year) {
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  if (month === 2) {
    return (isLeapYear(year) && year !== 0) ? 29 : 28;
  }

  return 31;
}

function isLastDayOfMonth(day, month, year) {
  return day === lastDayOfMonth(month, year);
}

function isInvalidMonth(month) {
  return month < 1 || month > 12;
}

function isInvalidDate(day, month, year) {
  return day < 1 || day > lastDayOfMonth(month, year);
}

function nextDate(date) {
  const day = sliceDate(date, 0, 2);
  const month = sliceDate(date, 3, 5);
  const year = sliceDate(date, 6, 10);
  return nextDateInCalendar(day, month, year);
}

function nextDateInCalendar(day, month, year) {
  if (isInvalidMonth(month) || isInvalidDate(day, month, year)) {
    return "Invalid Date";
  }

  if (isYearEnd(day, month, year)) {
    return formatDate(1, 1, year + 1);
  }

  if (isLastDayOfMonth(day, month, year)) {
    return formatDate(1, month + 1, year);
  }

  return formatDate(day + 1, month, year);
}

function consoleMessage(msg, result, expected) {
  const actualFragment = "\nCALCULATED : " + result;
  const expectedFragment = "\nEXPECTED   : " + expected;
  const checkValue = result === expected;
  const symbol = checkValue ? "✅ " : "❌ ";
  let message = symbol + msg;

  if (!checkValue) {
    message += actualFragment + expectedFragment;
  }

  console.log(message);
}

function testNextDate(msg, date, expected) {
  const result = nextDate(date);
  consoleMessage(msg, result, expected);
}

function underline(text) {
  return "-".repeat(text.length);
}

function testSimpleNextDate() {
  console.log("SIMPLE NEXT DATE");
  console.log(underline("SIMPLE NEXT DATE"));
  testNextDate("14 Jan", "14-01-2025", "15-01-2025");
  testNextDate("15 Jan", "15-01-2025", "16-01-2025");
  testNextDate("28 Jan", "28-01-2025", "29-01-2025");
  console.log("\n");
}

function testEndOf31DaysMonth() {
  console.log("END OF MONTHS");
  console.log(underline("END OF MONTHS"));
  testNextDate("31 Jan", "31-01-2025", "01-02-2025");
  testNextDate("31 Mar", "31-03-2025", "01-04-2025");
  testNextDate("30 Apr", "30-04-2025", "01-05-2025");
  testNextDate("31 May", "31-05-2025", "01-06-2025");
  testNextDate("31 Jun", "30-06-2025", "01-07-2025");
  testNextDate("31 Jul", "31-07-2025", "01-08-2025");
  testNextDate("31 Aug", "31-08-2025", "01-09-2025");
  testNextDate("30 Sep", "30-09-2025", "01-10-2025");
  testNextDate("31 Oct", "31-10-2025", "01-11-2025");
  testNextDate("30 Nov", "30-11-2025", "01-12-2025");
  testNextDate("31 Dec", "31-12-2025", "01-01-2026");
  console.log("\n");
}

function testEdgeCases() {
  console.log("EDGE CASES");
  console.log(underline("EDGE CASES"));
  testNextDate("28 Feb (non-leap year)", "28-02-2026", "01-03-2026");
  testNextDate("29 Feb (leap-year)", "29-02-2020", "01-03-2020");
  testNextDate("28 Feb (year : 0000 )", "28-02-0000", "01-03-0000");
  testNextDate("End of year : 2099", "31-12-2099", "01-01-2100");
  testNextDate("End of year : 2199", "31-12-2199", "01-01-2200");
  console.log("\n");
}

function testInvalidCases() {
  const INVALID_DATE = "Invalid Date";

  testNextDate("Invalid Date : month value is 13", "29-13-2025", INVALID_DATE);
  testNextDate("Invalid Date : day > 31 (Jan)", "32-01-2025", INVALID_DATE);
  testNextDate("Invalid Date : day > 30 (Apr)", "31-04-2025", INVALID_DATE);
  testNextDate("Invalid Date : day < 0 (Jan)", "00-01-2025", INVALID_DATE);
  testNextDate("Invalid Date : day > 28 (Feb - non-leap year)", "29-02-2025", INVALID_DATE);
  testNextDate("Invalid Date : day > 29 (Feb - leap year)", "30-02-2020", INVALID_DATE);
  testNextDate("Invalid Date : year > 9999", "30-02-9999", INVALID_DATE);
  console.log("\n");
}

function main() {
  testSimpleNextDate();
  testEndOf31DaysMonth();
  testEdgeCases();
  testInvalidCases();
}

main();