import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 6: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-6.js");
        const code = `${data} \n return updateCarCollection`;

        const func = new Function(code);
        const updateCarCollection = func();

        expect(updateCarCollection("audi")).toStrictEqual(
            "audi has already existed in the 5 position of car collection."
        );

        expect(updateCarCollection("toyota")).toStrictEqual(
            "toyota has already existed in the 1 position of car collection."
        );
        expect(console.log.mock.calls[0][0]).toMatch(/new car collection is : toyota,fiat,honda,bmw,audi./)
        expect(console.log.mock.calls[1][0]).toMatch(/toyota has already existed in the 1 position of car collection./)
    });
});
