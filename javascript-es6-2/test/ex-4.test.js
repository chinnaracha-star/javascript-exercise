import fs from "fs/promises";

describe("exercise 4: ES6 tests cases", () => {
  test("เมื่อ console.log(newStudentProfile) จะต้องได้ผลลัพธ์ตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} return newStudentProfile`;

    const func = new Function(code);
    const newStudentProfile = func();

    expect(newStudentProfile).toStrictEqual({
      name: "John",
      age: 20,
      scores: { thai: 40 },
      hobbies: ["Football", "Coding", "Painting", "Yoga"],
    });
  });

});
