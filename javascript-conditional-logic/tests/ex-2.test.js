import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 2: Conditional Logic tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
      const data = await fs.readFile("./ex-2.js");
      const code = `${data}`;

      const func = new Function(code);
      func();
      expect(console.log.mock.calls[0][0]).toStrictEqual(
        "Light bulb is Broken."
      );
    });
});