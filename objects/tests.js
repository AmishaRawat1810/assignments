import { factorial, sum } from "./code.js";

const dbg = (x) => {
  if (typeof x !== "object") {
    console.log(x);
    return x;
  }
  console.table(x);
  return x;
};

const testcase = [
  {
    msg: "this is a test case for factorial",
    fnName: factorial,
    name: "FUNCTION : factorial",
    args: [5],
    result: undefined,
    expected: 120,
    isPassed: "",
  },
  {
    msg: "this is a test case for sum",
    fnName: sum,
    name: "FUNCTION : sum",
    args: [6, 4],
    result: undefined,
    expected: 10,
    isPassed: "",
  },
];

const test = (testcase) => {
  const result = testcase.fnName(...testcase.args);
  testcase.result = result;
  const isPassed = result === testcase.expected ? "✅" : "❌";
  testcase.isPassed = isPassed;
  console.table(testcase);
};

testcase.forEach(test);

dbg(2);
