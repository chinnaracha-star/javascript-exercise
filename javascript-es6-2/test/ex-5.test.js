import fs from "fs/promises";

describe("exercise 5: ES6 tests cases", () => {
  test("เมื่อทำการ console.log result1 และ result2 จะได้ผลลัพธ์แสดงทางหน้าจอออกมาตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data} return { result1, result2 }`;

    const func = new Function(code);
    const { result1, result2 } = func();

    expect(result1).toBe(36);
    expect(result2).toBe(10);
  });
});
