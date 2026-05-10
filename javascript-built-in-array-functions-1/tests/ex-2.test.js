import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 2", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function get5CharWords ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} \n return { get5CharWords }`;

    const func = new Function(code);
    const { get5CharWords } = func();

    let words = ["apple", "cat", "dog", "elephant"];

    expect(get5CharWords(words)).toEqual(["apple", "elephant"]);
  });
});
