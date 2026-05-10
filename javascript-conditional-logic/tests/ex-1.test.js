import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 1: Conditional Logic tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test.each(["On", "Off"])(
      "เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด",
      async (status) => {
        const data = await fs.readFile("./ex-1.js");
        const code = `${data}`;

        const func = new Function(
          code.replace(
            'let lightBulbStatus = "On";',
            `let lightBulbStatus = "${status}";`
          )
        );

        func();

        // Assert the console.log message
        expect(console.log).toHaveBeenCalledWith(`Light bulb is ${status}.`);
      }
    );
});