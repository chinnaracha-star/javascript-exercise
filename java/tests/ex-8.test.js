import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 8: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-8.js");
        const code = `${data} return totalPaidByLocation`;

        const func = new Function(code);
        const totalPaidByLocation = func();
        const result = {
            Chonburi: 226687,
            Suphanburi: 41012,
            Trang: 24826,
            Trat: 47202,
            Lopburi: 29815,
            'Chiang Mai': 48911,
            Lampang: 12545,
            Phuket: 88674,
            Saraburi: 23655,
            Phrae: 15678,
            Loei: 76757,
            'Chiang Rai': 11230,
            'Nakhon Pathom': 76705,
            Bangkok: 370177,
            'Samut Prakan': 38590,
            Rayong: 40543,
            Yala: 11315,
            Ranong: 42612,
            Phayao: 48147,
            Khonkaen: 23218,
            Nan: 37463,
            'Nakhon Sawan': 74321
        }

        expect(totalPaidByLocation).toEqual(result)
    });
});
