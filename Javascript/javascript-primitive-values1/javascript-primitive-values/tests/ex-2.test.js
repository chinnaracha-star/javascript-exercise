import fs from "fs/promises";

describe("Exercise 2 : primitive values tests cases", () => {
  test("exercise 2: productImage จะต้องมี value ที่ถูกต้อง", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return productImage`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe(null);
  });
});
