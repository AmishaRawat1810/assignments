import { assertEquals } from "jsr:@std/assert";
import {
  commonElements,
  insertIndexBeforeChar,
  nonCommonElements,
  sortDescending,
  sortedInCustom,
  squareRootOfAllOdds,
} from "../src/mfrse_ans.js";

Deno.test("1. Sort in descending :", () => {
  assertEquals(sortDescending, [8, 5, 4, 2, 1]);
});

Deno.test("2. Array sorted : even -> asc, odd -> desc", () => {
  assertEquals(sortedInCustom([8, 5, 4, 2, 1]), [2, 4, 8, 5, 1]);
});

Deno.test("3. Perfect square root of all odds in an array", () => {
  assertEquals(squareRootOfAllOdds([64, 24, 16, 3, 1]), [8, 4, 1]);
});

Deno.test("4. Common elements of two arrays", () => {
  assertEquals(commonElements([1, 2, 3], [2, 3]), [2, 3]);
});

Deno.test("5. Non-common elements of two arrays", () => {
  assertEquals(nonCommonElements([1, 2, 3], [2, 3]), [1]);
});

Deno.test("6. Inserts the index of every character in a string before the character", () => {
  assertEquals(insertIndexBeforeChar("abc"), "0a1b2c");
});
