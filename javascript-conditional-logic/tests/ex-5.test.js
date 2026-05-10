import fs from "fs/promises";

describe("exercise 5: Conditional Logic tests cases", () => {

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-5.js");
        const code = `${data} \n return calculateStudentGrade `;

        const func = new Function(code);
        const calculateStudentGrade = func()
        expect(calculateStudentGrade(30)).toBe("F");
        expect(calculateStudentGrade(73)).toBe("C");
        expect(calculateStudentGrade(80)).toBe("B");
        expect(calculateStudentGrade(60)).toBe("D");
        expect(calculateStudentGrade(90)).toBe("A");
    });
});