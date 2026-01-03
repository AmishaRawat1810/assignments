//1. descending order
export const sortDescending = [1, 4, 2, 5, 8].sort((a, b) => b - a);

//2. array sorted : even -> asc, odd -> desc
const isEven = (num) => num % 2 === 0;

const customSort = (a, b) => {
  if (isEven(a) && isEven(b)) return a - b; //ascending order
  if (!isEven(a) && !isEven(b)) return b - a; //descending order
  return isEven(a) ? -1 : 1; //ascending or descending
};

export const sortedInCustom = (array) => array.toSorted(customSort);

//3. Perfect square root of all num in an array
export const squareRootOfAllOdds = (array) =>
  array.map((x) => Math.sqrt(x))
    .filter((x) => Math.floor(x) === x);

//4. Common elements between two arrays
export const commonElements = (array1, array2) =>
  array1.filter((x) => array2.includes(x));

//5. Non-common elements between two arrays
export const nonCommonElements = (array1, array2) =>
  array1.filter((x) => !array2.includes(x));

//6. Inserts the index of every character in a string before the character
export const insertIndexBeforeChar = (string) =>
  string.split("").map((char, index) => index + char).join("");

//7. Pair of points that are closest to another
