import fs from "fs/promises";

describe("exercise 6: primitive values tests cases", () => {
  test("exercise 6: concatSentence จะต้องเขียนได้อย่างถูกต้อง ตามหลักการทำ String Concatenation", async () => {
    const data = await fs.readFile("./ex-6.js");
    const totalParts = 13000;

    const codeConcat = `${data} return concatSentence`;

    const funcConcat = new Function(codeConcat);

    const resultConcat = funcConcat();

    expect(resultConcat).toBe("Total: " + totalParts + " Machine parts");
  });

  test("exercise 6: literalSentence จะต้องเขียนได้อย่างถูกต้อง ตามหลักการ String Template Literals", async () => {
    const data = await fs.readFile("./ex-6.js");
    const totalParts = 13000;

    const codeLiteral = `${data} return literalSentence`;

    const funcLiteral = new Function(codeLiteral);

    const resultLiteral = funcLiteral();

    expect(resultLiteral).toBe(`Total: ${totalParts} Machine parts`);
  });
});
