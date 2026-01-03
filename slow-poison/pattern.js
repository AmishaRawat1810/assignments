const FILLED_RECT = "filled-rectangle";
const HOLLOW_RECT = "hollow-rectangle";
const ALT_RECT = "alternating-rectangle";
const SPACED_ALT_RECT = "spaced-alternating-rectangle";
const TRIANGLE = "triangle";
const RIGHT_TRIANGLE = "right-aligned-triangle";
const DIAMOND = "diamond";

function repeatChar(char, frequency) {
  return char.repeat(frequency);
}

function filledRectangle(column, row) {
  let pattern = "";
  for (let index = 0; index < row; index++) {
    pattern += repeatChar("*", column) + "\n";
  }

  return pattern.trimEnd();
}

function hollowRectangle(column, row, char) {
  if (row <= 2 || column <= 2) {
    return filledRectangle(column, row);
  }

  let pattern = "";

  pattern += repeatChar(char, column) + "\n";
  pattern += char + repeatChar(" ", column - 2) + char + "\n";
  pattern += repeatChar(char, column);

  return pattern;
}

function isEven(value) {
  return value % 2 === 0;
}

function alternatingRectangle(columns, endOfRow) {
  let pattern = "";

  for (let row = 1; row <= endOfRow; row++) {
    const char = isEven(row) ? "-" : "*";
    pattern += char.repeat(columns) + "\n";
  }

  return pattern.trimEnd();
}

function fillRowWith(value, frequency) {
  const choice = value % 3;
  const pattern = [" ", "*", "-"];
  return pattern[choice].repeat(frequency);
}

function spacedAlternating(column, row) {
  let pattern = "";
  let newLine = "";

  if (row <= 2) {
    return alternatingRectangle(column, row);
  }

  for (let index = 1; index <= row; index++) {
    pattern += newLine + fillRowWith(index, column);
    newLine = "\n";
  }

  return pattern.trimEnd();
}

function triangle(size) {
  let pattern = "";

  for (let count = 1; count <= size; count++) {
    pattern += repeatChar("*", count) + "\n";
  }
  return pattern.trimEnd();
}

function rightTriangle(size) {
  let pattern = "";

  for (let index = 1; index <= size; index++) {
    pattern += repeatChar(" ", size - index);
    pattern += repeatChar("*", index) + "\n";
  }

  return pattern.trimEnd();
}

function diamond(size) {
  const length = isEven(size) ? size - 1 : size;
  let pattern = "";
  let newLine = "";
  
  for (let times = 1; times < length; times += 2) {
    const spaces = (length - times) / 2;
    pattern += newLine + repeatChar(" ", spaces) + repeatChar("*", times);
    newLine = "\n";
  }

  pattern += newLine + repeatChar("*", length);

  for (let times = length - 2; times >= 1; times -= 2) {
    const spaces = (length - times) / 2;
    pattern += newLine + repeatChar(" ", spaces) + repeatChar("*", times);
  }

  return pattern;
}

function generatePattern(style, dimensions) {
  const column = dimensions[0];
  const row = dimensions.length === 2 ? dimensions[1] : column;

  if (row === 0 || column === 0) {
    return "";
  }

  switch (style) {
    case FILLED_RECT:
      return filledRectangle(column, row);
    case HOLLOW_RECT:
      return hollowRectangle(column, row, "*");
    case ALT_RECT:
      return alternatingRectangle(column, row);
    case SPACED_ALT_RECT:
      return spacedAlternating(column, row);
    case TRIANGLE:
      return triangle(column);
    case RIGHT_TRIANGLE:
      return rightTriangle(column);
    case DIAMOND:
      return diamond(column);
  }
}

function consoleMessage(msg, result, expected) {
  const actualFragment = "\nCALCULATED :\n" + result;
  const expectedFragment = "\nEXPECTED   :\n" + expected;
  const checkValue = result === expected;
  const symbol = checkValue ? "✅ " : "❌ ";
  let message = symbol + msg;

  if (!checkValue) {
    message += actualFragment + expectedFragment;
  }

  console.log(message);
}

function testGeneratePattern(msg, style, dimensions, expected) {
  const result = generatePattern(style, dimensions);
  consoleMessage(msg, result, expected);
}

function underline(string) {
  return "-".repeat(string.length);
}

function testFilledRectangle() {
  console.log(FILLED_RECT);
  console.log(underline(FILLED_RECT));
  testGeneratePattern("Filled-Rectangle : 5 , 3", FILLED_RECT, [5, 3], "*****\n*****\n*****");
  testGeneratePattern("Filled-Rectangle : 5 , 0", FILLED_RECT, [5, 0], "");
  testGeneratePattern("Filled-Rectangle : 0 , 1", FILLED_RECT, [0, 1], "");
  console.log("\n");
}

function testHollowRectangle() {
  console.log(HOLLOW_RECT);
  console.log(underline(HOLLOW_RECT));
  testGeneratePattern("Hollow-Rectangle : 4 , 3", HOLLOW_RECT, [4, 3], "****\n*  *\n****");
  testGeneratePattern("Hollow-Rectangle : 4 , 0", HOLLOW_RECT, [4, 0], "");
  testGeneratePattern("Hollow-Rectangle : 3 , 3", HOLLOW_RECT, [3, 3], "***\n* *\n***");
  testGeneratePattern("Hollow-Rectangle : 2 , 2", HOLLOW_RECT, [2, 2], "**\n**");
  testGeneratePattern("Hollow-Rectangle : 0 , 2", HOLLOW_RECT, [0, 2], "");
  testGeneratePattern("Hollow-Rectangle : 1 , 2", HOLLOW_RECT, [1, 2], "*\n*");
  testGeneratePattern("Hollow-Rectangle : 2 , 1", HOLLOW_RECT, [2, 1], "**");
  testGeneratePattern("Hollow-Rectangle : 0 , 0", HOLLOW_RECT, [0, 0], "");
  testGeneratePattern("Hollow-Rectangle : 1 , 5", HOLLOW_RECT, [1, 5], "*\n*\n*\n*\n*");
  testGeneratePattern("Hollow-Rectangle : 5 , 1", HOLLOW_RECT, [5, 1], "*****");
  testGeneratePattern("Hollow-Rectangle : 6 , 2", HOLLOW_RECT, [6, 2], "******\n******");
  console.log("\n");
}

function testAlternatingRectangle() {
  console.log(ALT_RECT);
  console.log(underline(ALT_RECT));
  testGeneratePattern("Alternating-Rectangle : 3 , 3", ALT_RECT, [3, 3], "***\n---\n***");
  testGeneratePattern("Alternating-Rectangle : 4 , 0", ALT_RECT, [4, 0], "");
  console.log("\n");
}

function testSpacedAlternateRectangle() {
  console.log(SPACED_ALT_RECT);
  console.log(underline(SPACED_ALT_RECT));
  testGeneratePattern("Spaced Alternating : 5, 4", SPACED_ALT_RECT, [5, 4], "*****\n-----\n     \n*****");
  testGeneratePattern("Spaced Alternating : 2, 2", SPACED_ALT_RECT, [2, 2], "**\n--");
  testGeneratePattern("Spaced Alternating : 2, 1", SPACED_ALT_RECT, [2, 1], "**");
  testGeneratePattern("Spaced Alternating : 0, 1", SPACED_ALT_RECT, [0, 1], "");
  testGeneratePattern("Spaced Alternating : 1, 0", SPACED_ALT_RECT, [1, 0], "");
  testGeneratePattern("Spaced Alternating : 1, 2", SPACED_ALT_RECT, [1, 2], "*\n-");
  console.log("\n");
}

function testTriangle() {
  console.log("Triangle (size)");
  console.log(underline("Triangle (size)"));
  testGeneratePattern("Triangle : size 3", "triangle", [3], "*\n**\n***");
  testGeneratePattern("Triangle : size 4", "triangle", [4], "*\n**\n***\n****");
}

function testRightTriangle() {
  console.log("Right Triangle (size)");
  console.log(underline("Right Triangle (size)"));
  testGeneratePattern("Right Triangle : size 5", "right-aligned-triangle", [5], "    *\n   **\n  ***\n ****\n*****");
  testGeneratePattern("Right Triangle : size 3", "right-aligned-triangle", [3], "  *\n **\n***");
  testGeneratePattern("Right Triangle : size 0", "right-aligned-triangle", [0], "");
}

function testDiamond() {
  console.log("Diamon (size)");
  console.log(underline("Diamond (size)"));
  testGeneratePattern("diamond : 4", "diamond", [4], " *\n***\n *");
  testGeneratePattern("diamond : 0", "diamond", [0], "");
  testGeneratePattern("diamond : 1", "diamond", [1], "*");
  testGeneratePattern("diamond : 2", "diamond", [2], "*");
  testGeneratePattern("diamond : 3", "diamond", [3], " *\n***\n *");
  testGeneratePattern("diamond : 3", "diamond", [3], " *\n***\n *");
}

function main() {
  testFilledRectangle();
  testHollowRectangle();
  testAlternatingRectangle();
  testSpacedAlternateRectangle();
  testTriangle();
  testRightTriangle();
  testDiamond();
}

main();