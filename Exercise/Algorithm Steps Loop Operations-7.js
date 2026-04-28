//เรามี Object employeeInfo ซึ่งบรรจุชื่อและข้อมูลพนักงาน ให้เขียน Algorithm 
// ที่นำข้อมูลพนักงานมาตรวจสอบ หากเจอว่าพนักงานคนนั้นเป็น “Programmer” ให้เพิ่มเงินเดือน 1000 บาท 
// จากนั้นแสดงผลลัพธ์บนหน้าจอ เช่น ถ้า employeeInfo มีค่าเท่ากับ Object ต่อไปนี้


const employeeInfo = {
  John: {
    position: "Programmer",
    salary: 50000,
  },
  Jane: {
    position: "Manager",
    salary: 60000,
  },
  Dorah: {
    position: "Programmer",
    salary: 55000,
  },
  Alice: {
    position: "Sales",
    salary: 45000,
  },
};

// รับค่า employeeInfo
// วนลูปผ่านพนักงานทุกคนใน Object
// ตรวจสอบว่า position === "Programmer" หรือไม่
// ถ้าใช่ → เพิ่มเงินเดือน +1000
// แสดงผลข้อมูลพนักงานทั้งหมด

// Algorithm
for (let name in employeeInfo) {
  if (employeeInfo[name].position === "Programmer") {
    employeeInfo[name].salary += 1000;
  }
}

// แสดงผลลัพธ์
console.log(employeeInfo);