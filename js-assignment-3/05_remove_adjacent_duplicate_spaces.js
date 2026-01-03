/*
  Implement the below function to replace every run of adjacent SPACE(" ")
  characters with a single SPACE in the given sentence.

  Rules:
  - Consider only the plain SPACE character (" "). Any contiguous sequence
    of one or more SPACE characters should become a single SPACE.
  - Leading and trailing runs of spaces are also collapsed to a single space.
  - Do NOT modify other whitespace characters: TAB("\t") and NEW LINE("\n")
    must remain exactly as they are.
  - Runs of spaces that are separated by other characters (including \t or \n)
    are treated separately and each such run is collapsed independently.

  Examples:
  removeAdjacentDuplicateSpaces("statement      with    two spaces")
    -> "statement with two spaces"
    (multiple spaces between words collapsed to single spaces)

  removeAdjacentDuplicateSpaces("   hello   world   ")
    -> " hello world "
    (leading/trailing runs collapsed to single leading/trailing space)
*/

function removeAdjacentDuplicateSpaces(sentence) {
    // Implementation here.
    let result = "";
    let space = 1;

    for (let index = 0; index < sentence.length; index++) {
      if (isWhiteSpace(sentence[index]) && space === 1) {
        result = result + " ";
        space++;
      }
      
      if (!isWhiteSpace(sentence[index])) {
        result = result + sentence[index];
        space = 1;
      }
    }
    
    return result;
}

function isWhiteSpace(term) {
  return term === " ";
}

function composeMessage(string, checkValue, calculatedValue, expectedValue) {
  const inputFragment = '"' + string + '"' + "\n";
  const actualFragment = "Result is " + calculatedValue + "\n";
  const expectedFragment = "Expected is " + expectedValue + "\n";

  console.log(checkValue, inputFragment, actualFragment, expectedFragment);
}

function testRemoveDuplicate(string, expectedValue) {
  const result = removeAdjacentDuplicateSpaces(string);
  const checkValue = result === expectedValue ? "✅" : "❌";

  composeMessage(string, checkValue, result, expectedValue);
}

function testAll() {
  testRemoveDuplicate(" hello  ", " hello ");
  testRemoveDuplicate(" hello  \n", " hello \n");
  testRemoveDuplicate("\n hello  \n", "\n hello \n");
  testRemoveDuplicate("----   ", "---- ");
  testRemoveDuplicate("  ", " ");
  testRemoveDuplicate("", "");
  testRemoveDuplicate("      aA \t\tbb  ", " aA \t\tbb ");
  testRemoveDuplicate(" \t\t ", " \t\t ");
}

testAll();