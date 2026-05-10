import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 1: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-1.js");
        const code = `${data}`;
        const func = new Function(code);
        func();

        // expect(totalTransactions).toBe(1410083);
        expect(console.log).toHaveBeenCalledWith(
            "Total bill transaction is 1410083"
        );
    });
});
