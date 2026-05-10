import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 5", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function getAverageStudentScore ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data} \n return { getAverageStudentScore }`;

    const func = new Function(code);
    const { getAverageStudentScore } = func();

    const students = [
      { name: "John", score: 80 },
      { name: "Jane", score: 90 },
      { name: "Jim", score: 85 },
      { name: "Joan", score: 95 },
    ];

    expect(getAverageStudentScore(students)).toEqual(87.5);
  });
});
