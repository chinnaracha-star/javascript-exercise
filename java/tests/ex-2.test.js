import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 2: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("Variable ที่ชื่อว่า newBills จะได้ Array ของ Object ที่ Property member ที่มี Value ที่ไม่ใช่ null ทุกอัน", async () => {
        const data = await fs.readFile("./ex-2.js");
        const code = `${data} return newBills`;

        const func = new Function(code);
        const newBills = func();
        const result = [
            {
                id: '1',
                transactionDate: '2021-08-01',
                total: 20000,
                location: 'Chonburi',
                paymentType: 'Cash',
                member: { name: 'Mark', age: '26' },
                pointRate: 0.01
            },
            {
                id: '2',
                transactionDate: '2021-08-01',
                total: 12298,
                location: 'Chonburi',
                paymentType: 'Cash',
                member: { name: 'Mark', age: '26' },
                pointRate: 0.01
            },
            {
                id: '3',
                transactionDate: '2021-08-01',
                total: 41012,
                location: 'Suphanburi',
                paymentType: 'Mastercard',
                member: { name: 'Peter', age: 33 },
                pointRate: 0.01
            },
            {
                id: '4',
                transactionDate: '2021-08-02',
                total: 24826,
                location: 'Trang',
                paymentType: 'MasterCard',
                member: { name: 'Bee', age: 31 },
                pointRate: 0.01
            },
            {
                id: '6',
                transactionDate: '2021-08-15',
                total: 29815,
                location: 'Lopburi',
                paymentType: 'VISA',
                member: { name: 'Mark', age: 26 },
                pointRate: 0.01
            },
            {
                id: '7',
                transactionDate: '2021-08-14',
                total: 28375,
                location: 'Chonburi',
                paymentType: 'VISA',
                member: { name: 'Jack', age: 36 },
                pointRate: 0.01
            },
            {
                id: '10',
                transactionDate: '2021-08-07',
                total: 46169,
                location: 'Phuket',
                paymentType: 'Mastercard',
                member: { name: 'Patrick', age: 28 },
                pointRate: 0.01
            },
            {
                id: '11',
                transactionDate: '2021-08-11',
                total: 23655,
                location: 'Saraburi',
                paymentType: 'AliPay',
                member: { name: 'John', age: 32 },
                pointRate: 0.01
            },
            {
                id: '12',
                transactionDate: '2021-08-03',
                total: 42505,
                location: 'Phuket',
                paymentType: 'QR',
                member: { name: 'John', age: 32 },
                pointRate: 0.01
            },
            {
                id: '13',
                transactionDate: '2021-08-03',
                total: 15678,
                location: 'Phrae',
                paymentType: 'Cash',
                member: { name: 'Bee', age: 31 },
                pointRate: 0.01
            },
            {
                id: '14',
                transactionDate: '2021-08-26',
                total: 53209,
                location: 'Loei',
                paymentType: 'MasterCard',
                member: { name: 'Jack', age: 36 },
                pointRate: 0.01
            },
            {
                id: '17',
                transactionDate: '2021-08-28',
                total: 15885,
                location: 'Bangkok',
                paymentType: 'MasterCard',
                member: { name: 'T', age: 29 },
                pointRate: 0.01
            },
            {
                id: '18',
                transactionDate: '2021-08-02',
                total: 38590,
                location: 'Samut Prakan',
                paymentType: 'AliPay',
                member: { name: 'Pop', age: 38 },
                pointRate: 0.01
            },
            {
                id: '19',
                transactionDate: '2021-08-17',
                total: 35786,
                location: 'Bangkok',
                paymentType: 'VISA',
                member: { name: 'Lisa', age: 21 },
                pointRate: 0.01
            },
            {
                id: '23',
                transactionDate: '2021-08-29',
                total: 127142,
                location: 'Chonburi',
                paymentType: 'Cash',
                member: { name: 'Alex', age: 27 },
                pointRate: 0.01
            },
            {
                id: '25',
                transactionDate: '2021-08-21',
                total: 11315,
                location: 'Yala',
                paymentType: 'VISA',
                member: { name: 'Bank', age: 40 },
                pointRate: 0.01
            },
            {
                id: '31',
                transactionDate: '2021-08-24',
                total: 37463,
                location: 'Nan',
                paymentType: 'AliPay',
                member: { name: 'Mark', age: 26 },
                pointRate: 0.01
            },
            {
                id: '32',
                transactionDate: '2021-08-06',
                total: 27477,
                location: 'Bangkok',
                paymentType: 'MasterCard',
                member: { name: 'P', age: 49 },
                pointRate: 0.01
            },
            {
                id: '33',
                transactionDate: '2021-08-22',
                total: 109872,
                location: 'Bangkok',
                paymentType: 'VISA',
                member: { name: 'Mark', age: 26 },
                pointRate: 0.02
            },
            {
                id: '35',
                transactionDate: '2021-08-10',
                total: 120286,
                location: 'Bangkok',
                paymentType: 'VISA',
                member: { name: 'Bee', age: 31 },
                pointRate: 0.02
            },
            {
                id: '36',
                transactionDate: '2021-08-25',
                total: 74321,
                location: 'Nakhon Sawan',
                paymentType: 'QR',
                member: { name: 'Mark', age: 26 },
                pointRate: 0.01
            }
        ]

        expect(newBills).toStrictEqual(result)
    });
});


