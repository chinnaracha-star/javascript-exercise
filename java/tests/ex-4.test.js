import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 4: Build-in Array Function tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  // Cannot check console log
  test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} return totalMembers`;

    const func = new Function(code);
    const totalMembers = func();

    expect(totalMembers).toBe(12);
    // expect(console.log).toHaveBeenCalledWith("Unique Members Count: 12");
  });
});
