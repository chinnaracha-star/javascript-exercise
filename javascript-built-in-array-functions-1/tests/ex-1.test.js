import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 1", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function getWordLengths ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} \n return { getWordLengths }`;

    const func = new Function(code);
    const { getWordLengths } = func();

    let words = ["hello", "world"];

    expect(getWordLengths(words)).toEqual([5, 5]);
  });
});
