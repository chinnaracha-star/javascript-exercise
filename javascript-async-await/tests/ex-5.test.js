import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 5: Conditional Logic tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-5.js");
        const code = `${data}`;

        const func = new Function(code);
        func()
        const result = {
            errorCode: 500,
            message: "👿 Failed to request data from server",
        }
        await new Promise((resolve) => setTimeout(resolve, 2000))
        expect(console.log.mock.calls[0][0]).toEqual(result);
    });
});