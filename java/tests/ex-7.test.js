import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 7: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-7.js");
        const code = `${data} \n return isPalindrome`;

        const func = new Function(code);
        const isPalindrome = func();

        expect(isPalindrome("reviver")).toBe(true);
        expect(isPalindrome("บวบ")).toBe(true);
        expect(isPalindrome("deliver")).toBe(false);
    });
});
