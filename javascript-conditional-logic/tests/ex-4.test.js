import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 4: Conditional Logic tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test.each([
      ["On", "Light bulb is On."],
      ["Off", "Light bulb is Off."],
      ["Broken", "Light bulb is Broken."],
      ["Unknown", "Please choose the correct input (On/Off/Broken)"],
    ])(
      "เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด",
      async (status, expectedMessage) => {
        const data = await fs.readFile("./ex-4.js");
        const code = `${data}`;

        const func = new Function(
          code.replace(
            'let lightBulbStatus = "On";',
            `let lightBulbStatus = "${status}";`
          )
        );

        func();

        // Assert the console.log message
        expect(console.log).toHaveBeenCalledWith(expectedMessage);
      }
    );
});