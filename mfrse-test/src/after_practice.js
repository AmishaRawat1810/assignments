//result : one single array
export const distinctElements = (list1, list2) =>
  list1.filter((value) => !list2.includes(value)).concat(
    list2.filter((value) => !list1.includes(value)),
  );

// result : two subarrays
export const distinctElements2 = (list1, list2) => {
  const distinct1 = list1.filter((value) => !list2.includes(value));
  const distinct2 = list2.filter((value) => !list1.includes(value));
  return [distinct1, distinct2];
};

// difference : uses variable then returns as object
export const unionAndIntersection = (set1, set2) => {
  const intersection = set1.filter((value) => set2.includes(value));
  const union = [...set1, ...set2].reduce(
    (accumulator, value) =>
      !accumulator.includes(value) ? [...accumulator, value] : [...accumulator],
    [],
  );
  return { union: union, intersection: intersection };
};

// difference : single line expression
export const unionAndIntersection2 = (set1, set2) => ({
  union: [...set1, ...set2].reduce(
    (items, item) => !items.includes(item) ? [...items, item] : [...items],
    [],
  ),
  intersection: set1.filter((item) => set2.includes(item)),
});

export const symmetricDifference = (set1, set2) =>
  set1.filter((x) => !set2.includes(x)).concat(
    set2.filter((x) => !set1.includes(x)),
  );

//difference : used an inner for loop
export const findPairIndices = (list, sum) =>
  list.reduce((count, current, index) => {
    for (let j = index + 1; j < list.length; j++) {
      if (current + list[j] === sum) {
        count++;
      }
    }
    return count;
  }, 0);

//difference : just used iterative methods
export const findPairIndices2 = (list, sum) =>
  list.reduce((count, current, index) =>
    list.slice(index + 1)
      .filter((x) => x === (sum - current)).length + count, 0);

//[2, 5, 1, 6]
export const findAnyIndicePair = (list, sum) => {
  let foundPair = null;
  list.some((num, index) => {
    list.slice(index + 1).some((nextNum, innerIndex) => {
      if (num + nextNum === sum) {
        foundPair = [index, innerIndex + 1 + index];
        return true;
      }
      return false;
    });
    return foundPair !== null;
  });
  return foundPair;
};
