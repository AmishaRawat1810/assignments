import { assertEquals } from "@std/assert/equals";
import {
  distinctElements,
  distinctElements2,
  findAnyIndicePair,
  findPairIndices,
  findPairIndices2,
  symmetricDifference,
  unionAndIntersection,
  unionAndIntersection2,
} from "../src/after_practice.js";

Deno.test("Distinct elements between two lists :", () => {
  assertEquals(distinctElements([1, 2, 3], [4, 5, 100]), [1, 2, 3, 4, 5, 100]);
});
Deno.test("Distinct elements between two lists :", () => {
  assertEquals(distinctElements2([1, 2, 3], [4, 5, 100]), [[1, 2, 3], [
    4,
    5,
    100,
  ]]);
});

Deno.test("Union and Intersection for distinct sets:", () => {
  assertEquals(unionAndIntersection([1, 2, 3], [4, 5, 6]), {
    union: [1, 2, 3, 4, 5, 6],
    intersection: [],
  });
});
Deno.test("Union and Intersection for overlapping sets:", () => {
  assertEquals(unionAndIntersection([1, 2, 3, 4], [3, 4, 5, 6]), {
    union: [1, 2, 3, 4, 5, 6],
    intersection: [3, 4],
  });
});
Deno.test("Union and Intersection with empty input:", () => {
  assertEquals(unionAndIntersection([1, 2], []), {
    union: [1, 2],
    intersection: [],
  });
});

Deno.test("Union and Intersection for distinct sets:", () => {
  assertEquals(unionAndIntersection2([1, 2, 3], [4, 5, 6]), {
    union: [1, 2, 3, 4, 5, 6],
    intersection: [],
  });
});
Deno.test("Union and Intersection for overlapping sets:", () => {
  assertEquals(unionAndIntersection2([1, 2, 3, 4], [3, 4, 5, 6]), {
    union: [1, 2, 3, 4, 5, 6],
    intersection: [3, 4],
  });
});
Deno.test("Union and Intersection with empty input:", () => {
  assertEquals(unionAndIntersection2([1, 2], []), {
    union: [1, 2],
    intersection: [],
  });
});

Deno.test("Elements in exactly one array (symmetric difference):", () => {
  assertEquals(symmetricDifference([1, 2, 3, 4], [3, 4, 5, 6]), [1, 2, 5, 6]);
});
Deno.test("Elements in exactly one array (distinct sets):", () => {
  assertEquals(symmetricDifference([1, 2], [3, 4]), [1, 2, 3, 4]);
});
Deno.test("Elements in exactly one array (one empty array):", () => {
  assertEquals(symmetricDifference([1, 2, 3], []), [1, 2, 3]);
});

Deno.test("No pair found:", () => {
  assertEquals(findPairIndices([1, 2, 3, 4], 20), 0);
});
Deno.test("Multiple pairs exist (returns first one):", () => {
  assertEquals(findPairIndices([1, 2, 3, 4, 5], 6), 2);
});
Deno.test("Pair found in the middle:", () => {
  assertEquals(findPairIndices([1, 4, 6, 8, 10], 10), 1);
});
Deno.test("Pair found at the ends:", () => {
  assertEquals(findPairIndices([2, 5, 1, 6], 8), 1);
});

Deno.test("No pair found:", () => {
  assertEquals(findPairIndices2([1, 2, 3, 4], 20), 0);
});
Deno.test("Multiple pairs exist (returns first one):", () => {
  assertEquals(findPairIndices2([1, 2, 3, 4, 5], 6), 2);
});
Deno.test("Pair found in the middle:", () => {
  assertEquals(findPairIndices2([1, 4, 6, 8, 10], 10), 1);
});
Deno.test("Pair found at the ends:", () => {
  assertEquals(findPairIndices2([2, 5, 1, 6], 8), 1);
});

Deno.test("Should return a valid pair for the standard example", () => {
  assertEquals(findAnyIndicePair([1, 5, 7, -1, 5], 6), [0, 1]);
});
Deno.test("Should return a valid pair with negative numbers", () => {
  assertEquals(findAnyIndicePair([10, -1, 4, 3, -2], 2), [1, 3]);
});
