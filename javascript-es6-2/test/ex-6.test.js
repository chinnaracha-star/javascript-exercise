import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 6: Other Features tests case", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("เมื่อทำการ console.log ตัว `result` จะได้ผลลัพธ์แสดงทางหน้าจอออกมาว่า 'Height is not defined'", async () => {
    const data = await fs.readFile("./ex-6.js");
    const code = `${data} return result`;

    const func = new Function(code);
    const result = func();
    expect(console.log.mock.calls[0][0]).toBe("Height is not defined");

  });
});

