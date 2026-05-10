import fs from "fs/promises";

describe("exercise 3: ES6 tests cases", () => {
  test("exercise 3: เมื่อ console.log(newOrders) จะต้องได้ผลลัพธ์ตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return newOrders`;

    const func = new Function(code);
    const newOrders = func();

    expect(newOrders).toStrictEqual([
      {
        orderId: "A001",
        paymentType: "Cash",
        totalPrice: 2500,
      },
      {
        orderId: "A002",
        paymentType: "Credit Card",
        totalPrice: 4000,
      },
      {
        orderId: "A003",
        paymentType: "Credit Card",
        totalPrice: 6000,
      },
      {
        orderId: "A004",
        paymentType: "Credit Card",
        totalPrice: 611000,
      },
      {
        orderId: "A005",
        paymentType: "Credit Card",
        totalPrice: 45000,
      },
    ]);
  });

});
