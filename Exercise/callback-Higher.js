// 1. นี่คือ Higher Order Function (คนรับคำสั่ง)
// หน้าที่: รับตัวเลข 2 ตัว และรับ "สูตร" (action) มาทำ
function calculate(num1, num2, action) {
  const result = action(num1, num2); // เรียกใช้ Callback ตรงนี้
  const totalResult = result + 1000;
  console.log(`ผลลัพธ์คือ: ${totalResult}`);
}

// 2. นี่คือ Callbacks (สูตรต่างๆ ที่เราเตรียมไว้)
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

// --- เวลาใช้งาน ---

// ส่งฟังก์ชัน add เข้าไปเป็น callback
calculate(10, 5, add); // Output: ผลลัพธ์คือ: 15

// ส่งฟังก์ชัน multiply เข้าไปเป็น callback
calculate(10, 5, multiply); // Output: ผลลัพธ์คือ: 50

// ส่งฟังก์ชันแบบเขียนสด (Arrow Function) เข้าไปเลยก็ได้
calculate(10, 5, (a, b) => a - b); // Output: ผลลัพธ์คือ: 5

calculate(10, 5, function (a, b) {
  return a / b;
});

function eat() {
  console.log("Eating");
}

function runTask(task) {
  console.log("Start");
  task();
  console.log("End");
}

runTask(eat);
