/**
 * Implement the `nextDate` function below. Given a date in the format dd-mm-yyyy, 
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format. 
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy), for example, "32-02-2025", 
 * return "Invalid Date".
*/

// Extract parts of date
function dayOf(date) {
  return parseInt(date.slice(0, 2));
}

function monthOf(date) {
  return parseInt(date.slice(3, 5));
}

function yearOf(date) {
  return parseInt(date.slice(6, 10));
}

//----------------- Checking the month in date --------------
function is31DaysMonth(month) {
  const months = "1, 3, 5, 7, 8, 10, 12";
  return months.includes(month);
}

function is30DaysMonth(month) {
  const months = "4, 6, 9, 11";
  return months.includes(month);
}

function febMonth(month) {
  return month === 2;
}

//-------------- Checking if it is a leap year -----------------------
function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}
function isLeapYear(year) {
  return (isDivisible(year, 4) && !isDivisible(year, 100)) || isDivisible(year, 400);
}

//-------------- writing date into format ------------------
function inDateFormat(day, month, year) {
  const date = day.toString().padStart(2, "0") + "-" +
    month.toString().padStart(2, "0") + "-" +
    year.toString().padStart(4, "0");

  return date;
}

function notValidDay(day, month) {
  if (is31DaysMonth(month) && (day < 1 || day > 31)) {
    return true;
  }
  
  if (is30DaysMonth(month) && (day < 1 || day > 30)) {
    return true;
  }
}

function notValidFeb(day, month) {
  if (febMonth(month)) {
    if (isLeapYear(year) && (day < 1 || day > 29)) {
      return true;
    }
    if (!isLeapYear(year) && (day < 1 || day > 28)) {
      return true;
    }
  }
}

//----------------- Checking validity of date --------------------
function notValidDate(day, month, year) {
  if (month < 1 || month > 12) {
    return true;
  }
  if (year < 0 || year > 9999) {
    return true;
  }
  if(notValidDay(day, month) || notValidFeb(day, month)) {
    return true;
  }
  return false;
}

//---------------- incrementing day according to month -------------
function incrementFor31DayMonth(day, month, year) {
  if (day < 31) {
    day = day + 1;
  } else {
    day = 1;
    month = month + 1;
  }

  if (month > 12) {
    month = 1;
    year = year + 1;
  }

  if (year > 9999) return "Invalid Date";

  return inDateFormat(day, month, year);
}

function incrementFor30DayMonth(day, month, year) {
  if (day < 30) {
    day = day + 1;
  } else {
    day = 1;
    month = month + 1;
  }

  if (month > 12) {
    month = 1;
    year = year + 1;
  }

  if (year > 9999) return "Invalid Date";

  return inDateFormat(day, month, year);
}

function incrementFebInNonLeap(day, month, year) {
  if (day < 28) {
    day = day + 1;
  } else {
    day = 1;
    month = month + 1;
  }

  return inDateFormat(day, month, year);
}

function incrementFebInLeapYear(day, month, year) {
  if (day < 29) {
    day = day + 1;
  } else {
    day = 1;
    month = month + 1;
  }

  return inDateFormat(day, month, year);
}

//------------- Main function : next date --------------
function nextDate(date) {
  const day = dayOf(date);
  const month = monthOf(date);
  const year = yearOf(date);

  if (notValidDate(day, month, year)) {
    return "Invalid Date";
  }

  if (febMonth(month)) {
    if (isLeapYear(year)) {
      return incrementFebInLeapYear(day, month, year);
    } else {
      return incrementFebInNonLeap(day, month, year);
    }
  }

  if (is31DaysMonth(month)) {
    return incrementFor31DayMonth(day, month, year);
  }

  if (is30DaysMonth(month)) {
    return incrementFor30DayMonth(day, month, year);
  }

  return "Invalid Date";
}

function consoleMessage(description, date, result, expectedResult) {
  const inputFragment = "\n[" + date + "]" + "\n";
  const actualFragment = "Result is " + result + "\n";
  const expectedFragment = "Expected is " + expectedResult + "\n";
  const checkValue = result === expectedResult;
  const symbol = checkValue ? "✅ " : "❌ ";
  let message = symbol + description;

  if (!checkValue) {
    message += inputFragment + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testNextDate(description, date, expectedResult) {
  const result = nextDate(date);
  consoleMessage(description, date, result, expectedResult);
}

function testAll() {
  testNextDate("Simple increment : ", "15-03-2021", "16-03-2021");
  testNextDate("Simple increment : ", "15-01-2021", "16-01-2021");
  testNextDate("Simple increment : ", "15-04-2021", "16-04-2021");
  testNextDate("Increment of the last day of Feb in a non-leap year", "28-02-2021", "01-03-2021");
  testNextDate("Increment of the last day of a 30-days month", "30-11-2020", "01-12-2020");
  testNextDate("Increment of the last day of a 31-days month", "31-10-2020", "01-11-2020");
  testNextDate("Increment of second last day of feb in a leap year", "28-02-2020", "29-02-2020");
  testNextDate("Increment of last day of feb in a leap year", "29-02-2020", "01-03-2020");
  testNextDate("Increment of the first day of a month", "01-03-2021", "02-03-2021");
  testNextDate("Increment of the last day of Feb in a non-leap year", "28-02-2021", "01-03-2021");
  testNextDate("Increment of the last day of a 30-days month", "30-11-2020", "01-12-2020");
  testNextDate("Increment of the last day of a 31-days month", "31-10-2020", "01-11-2020");
  testNextDate("Increment of the last day in an year of 4-digits", "31-12-2020", "01-01-2021");
  testNextDate("Increment of the last day in an year of 3-digits", "31-12-0419", "01-01-0420");
  testNextDate("Increment of the last day in an year of 2-digits", "31-12-0019", "01-01-0020");
  testNextDate("Increment of the last day in an year of 1-digits", "31-12-0009", "01-01-0010");
  testNextDate("Increment of the last day to complete a decade", "31-12-2029", "01-01-2030");
  testNextDate("Increment of the last day to complete a century", "31-12-2299", "01-01-2300");
  testNextDate("Increment of the last day to complete a millennium", "31-12-2999", "01-01-3000");
  testNextDate("Increment of second last day of feb in a leap year", "28-02-2020", "29-02-2020");
  testNextDate("Increment of last day of feb in a leap year", "29-02-2020", "01-03-2020");
  testNextDate("Invalid date : day is 0", "00-10-2000", "Invalid Date");
  testNextDate("Invalid date : month is 0", "10-00-2000", "Invalid Date");
  testNextDate("Invalid date : year is 0", "01-10-0000", "02-10-0000");
  testNextDate("Invalid date : day, month is 0", "00-00-2000", "Invalid Date");
  testNextDate("Invalid date : month, year is 0", "01-00-0000", "Invalid Date");
  testNextDate("Invalid date : day, year is 0", "00-10-0000", "Invalid Date");
  testNextDate("Invalid date : day, month, year is 0", "00-00-0000", "Invalid Date");
  testNextDate("Invalid date : day is more than 31 for 31-days month", "32-10-2000", "Invalid Date");
  testNextDate("Invalid date : day is more than 30 for 30-days month", "31-09-2000", "Invalid Date");
  testNextDate("Invalid date : day is more than 28 for feb in a non-leap year", "29-02-2025", "Invalid Date");
  testNextDate("Invalid date : day is more than 29 for feb in a leap year", "30-02-2020", "Invalid Date");
  testNextDate("Invalid date : month is greater than 12", "01-13-2043", "Invalid Date");
  testNextDate("Invalid date : After increment, year is greater than 4-digits", "31-12-9999", "Invalid Date");

}

testAll();