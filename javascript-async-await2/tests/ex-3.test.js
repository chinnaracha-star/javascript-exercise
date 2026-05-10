import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 3: Conditional Logic tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-3.js");
        const code = `${data}`;

        const func = new Function(code);
        func()
        const result1 = {
            name: "John",
            age: 20,
            hobbies: ["Coding", "Football"],
        }
        const result2 = [
            {
                orderId: "001",
                items: ["apple", "banana"],
            },
            {
                orderId: "002",
                items: ["orange", "itim"],
            },
        ]
        await new Promise((resolve) => setTimeout(resolve, 1000))
        expect(console.log.mock.calls[0][0]).toEqual(result1);
        await new Promise((resolve) => setTimeout(resolve, 1500))
        expect(console.log.mock.calls[1][0]).toEqual(result2);
    });
});