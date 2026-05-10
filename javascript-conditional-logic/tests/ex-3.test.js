import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 3: Conditional Logic tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test.each([
      ["On", "Light bulb is On."],
      ["Off", "Light bulb is Off."],
      ["Unknown", "Please choose the correct input (On/Off)"],
    ])(
      "เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด",
      async (status, expectedMessage) => {
        const data = await fs.readFile("./ex-3.js");
        const code = `${data}`;

        const func = new Function(
          code.replace(
            'let lightBulbStatus = "Off";',
            `let lightBulbStatus = "${status}";`
          )
        );

        func();

        // Assert the console.log message
        expect(console.log).toHaveBeenCalledWith(expectedMessage);
      }
    );
});