import fs from "fs/promises";

describe("exercise 7: Other Features tests case", () => {
  test("โปรแกรมจะต้องไม่เกิด Error และเมื่อทำการ console.log ตัว `result1` จะได้ผลลัพธ์แสดงทางหน้าจอออกมาว่า undefined", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} return result1`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe(undefined);
  });

  test("โปรแกรมจะต้องไม่เกิด Error และเมื่อทำการ console.log ตัว `result2` จะได้ผลลัพธ์แสดงทางหน้าจอออกมาว่า 'English score is not defined'", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} return result2`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe("English score is not defined");
  });
});
