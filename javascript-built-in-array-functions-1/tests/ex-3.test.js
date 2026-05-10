import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 3", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function getTodoTopics ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} \n return { getTodoTopics }`;

    const func = new Function(code);
    const { getTodoTopics } = func();

    const todos = [
      { topic: "Doing pre-work", completed: true },
      { topic: "Workout", completed: false },
      { topic: "Playing computer games", completed: true },
      { topic: "Relax", completed: false },
      { topic: "Clean the room", completed: true },
    ];

    expect(getTodoTopics(todos)).toEqual([
      "Doing pre-work",
      "Workout",
      "Playing computer games",
      "Relax",
      "Clean the room",
    ]);
  });
});
