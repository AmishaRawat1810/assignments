const frequency = (accumulator, target) => {
  if (target in accumulator) {
    accumulator[target]++;
    return accumulator;
  }
  accumulator[target] = 1;
  return accumulator;
};

const something = ["a", "b", "a"];

console.log(something.reduce(frequency, {}));
