import fs from "fs/promises";
import { expect, test, describe } from "vitest";

describe("Exercise 4", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function getCompletedTodo ถูกต้องตามโจทย์", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} \n return { getCompletedTodo }`;

    const func = new Function(code);
    const { getCompletedTodo } = func();

    const todos = [
      { topic: "Doing pre-work", completed: true },
      { topic: "Workout", completed: false },
      { topic: "Playing computer games", completed: true },
      { topic: "Relax", completed: false },
      { topic: "Clean the room", completed: true },
    ];

    expect(getCompletedTodo(todos)).toEqual([
      { topic: "Doing pre-work", completed: true },
      { topic: "Playing computer games", completed: true },
      { topic: "Clean the room", completed: true },
    ]);
  });
});
