import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 5: Build-in Array Function tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data} \n return searchCrimeRecord`;

    const func = new Function(code);
    const searchCrimeRecord = func();

    expect(searchCrimeRecord("Dilan Sandra")).toStrictEqual(
      "Dilan Sandra has no crime record"
    );
    expect(searchCrimeRecord("Tinashe Benigno")).toStrictEqual(
      "Tinashe Benigno has crime record !!!"
    );
  });
});
