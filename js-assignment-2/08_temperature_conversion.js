/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function convert(from, to, value) {
  // Implementation here.
  const conversion = from + to;
  value = value * 1;

  switch (conversion) {
    case 'CF': return celsiusToFahrenheit(value);
    case 'CK': return celsiusToKelvin(value);
    case 'FC': return fahrenheitTOCelsius(value);
    case 'FK': return fahrenheitTOKelvin(value);
    case 'KC': return kelvinToCelsius(value);
    case 'KF': return kelvinToFahrenheit(value);
    default: return value;
  }
}

function celsiusToFahrenheit(temperature) {
  return ((9 * temperature) / 5) + 32;
}

function celsiusToKelvin(temperature) {
  return temperature + 273.15;
}

function fahrenheitTOCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}

function kelvinToCelsius(temperature) {
  return temperature - 273.15;
}

function fahrenheitTOKelvin(temperature) {
  return celsiusToKelvin(fahrenheitTOCelsius(temperature));
}

function kelvinToFahrenheit(temperature) {
  return celsiusToFahrenheit(kelvinToCelsius(temperature));
}

function isApproximate(termOne, termTwo) {
  return termOne - termTwo < 0.5;
}

function testConvert(from, to, value, expectedValue) {
  const result = convert(from, to, value);
  const checkValue = isApproximate(result, expectedValue) ? "✅" : "❌";

  console.log(checkValue, result, expectedValue);
}

function testAll() {
  testConvert('C', 'K', 0, 273.15);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'K', 98., 310.15);
  testConvert('F', 'C', -40, -40);
  testConvert('K', 'C', 100, -173.15);
  testConvert('K', 'F', 100, -279.67);
  testConvert('K', 'C', 'a', NaN);
  testConvert('C', 'C', '100', 100);
}

testAll();