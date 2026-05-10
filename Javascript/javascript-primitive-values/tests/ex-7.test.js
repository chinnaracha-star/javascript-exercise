import fs from "fs/promises";

describe("exercise 7: primitive values tests cases", () => {
  test("exercise 7: sentence จะต้องถูก reassign ค่าให้อย่างถูกต้องตามหลักการทำ String Concatenation", async () => {
    const data = await fs.readFile("./ex-7.js");
    const subject = "I";
    const verb = "am";
    const object = "A Software Developer";

    const code = `${data} return sentence`;
    const func = new Function(code);

    const result = func();

    expect(result).toBe(subject + " " + verb + " " + object);
  });

  test("exercise 7: sentence จะต้องมี type ที่ถูกต้อง", async () => {
    const data = await fs.readFile("./ex-7.js");
    const subject = "I";
    const verb = "am";
    const object = "A Software Developer";

    const code = `${data} return sentence`;
    const func = new Function(code);

    const result = func();

    expect(typeof result).toBe("string");
  });
});
