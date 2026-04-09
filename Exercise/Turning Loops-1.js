// โจทย์:

// เรามี Array salary ซึ่งบรรจุเงินเดือน และ Variable bonus ซึ่งเป็นตัวเลขโบนัสที่จะให้พนักงานทุกคนในปีนี้
// ให้เขียน Algorithm ที่นำเงินเดือนแต่ละอันมาบวก bonus แล้วแสดงผลลัพธ์ที่เป็น Array บนหน้าจอ (ให้ใช้ Loop ร่วมกับ Array.push())
// เช่น ถ้า salary = [10000, 20000, 30000] และ bonus = 1000 ตัว Algorithm จะแสดงผลลัพธ์เป็น [11000, 21000, 31000]
// เราสามารถเรียงลำดับกระบวนการดังนี้:
// Declare ตัว Variable salaryWithBonus เป็น Empty Array
// Loop ผ่านสมาชิกแต่ละตัวใน salary


salary = [10000, 20000, 30000];
bonus = 1000;

let salaryWithBonus = [];
for (let i = 0; i < salary.length; i++) {
  let updatedSalary = salary[i] + bonus;
  salaryWithBonus.push(updatedSalary);
}
console.log(salaryWithBonus);


