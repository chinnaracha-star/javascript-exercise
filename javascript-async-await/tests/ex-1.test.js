import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 1: Conditional Logic tests cases", () => {
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
        func()
        const result = {
            name: "John",
            age: 20,
            hobbies: ["Coding", "Football"],
        }
        await new Promise((resolve) => setTimeout(resolve, 1000))
        expect(console.log.mock.calls[0][0]).toEqual(result);
    });
});