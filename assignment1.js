//BINARY
const input = 8;
let inputCopy = input;
let binaryValue = 0;
let reminder = 0;
let temp = 0;
let product = 1;
let inputLength = 0;

//converting to binary and calculating length
while (inputCopy > 0){
  reminder = inputCopy % 2;
  binaryValue = binaryValue + reminder * product;
  temp = inputCopy - reminder;
  inputCopy = temp / 2;
  product = product * 10;
  inputLength = inputLength + 1;
}
console.log(binaryValue);
console.log(inputLength);

//SUBSTRING
const subString = 10;
let subStringLength = 0;
let tempsubString = subString;

while(tempsubString > 0){
  reminder = tempsubString % 10;
  temp = tempsubString - reminder;
  tempsubString = temp / 10;
  subStringLength = subStringLength + 1;
}
console.log(subStringLength);
console.log(subString);

