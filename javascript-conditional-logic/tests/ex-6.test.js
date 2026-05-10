import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 4: Conditional Logic tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-6.js");
        const code = `${data}`;

        const func = new Function(code);
        func()
        const result = ["The Beauty of Living Twice", "Black Beauty", "Monstrous Beauty"]
        expect(console.log.mock.calls[0][0]).toStrictEqual(result);
    });
});