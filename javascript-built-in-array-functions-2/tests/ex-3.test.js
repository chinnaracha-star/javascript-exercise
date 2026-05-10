import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 3: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("Varibale ที่ชื่อว่า billMembers จะต้องมี Value ตามที่กำหนด", async () => {
        const data = await fs.readFile("./ex-3.js");
        const code = `${data} return billMembers`;

        const func = new Function(code);
        const billMembers = func();
        const result = ['Mark', 'Mark', 'Peter', 'Bee', 'Mark', 'Jack', 'Patrick', 'John', 'John', 'Bee', 'Jack', 'T', 'Pop', 'Lisa', 'Alex', 'Bank', 'Mark', 'P', 'Mark', 'Bee', 'Mark']
        expect(billMembers).toStrictEqual(result);
    });
});
