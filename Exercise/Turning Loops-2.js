// เรามี Array scores ซึ่งบรรจุคะแนนสอบ ให้เขียน Algorithm ที่นำคะแนนสอบทั้งหมดมาบวกกัน 
// จากนั้นนำไปหาค่าเฉลี่ย แล้วแสดงบนหน้าจอ (ให้ใช้ Loop) เช่น

// ถ้า scores = [85, 90, 77, 88] ตัว Algorithm จะต้องแสดงผลลัพธ์ออกมาเป็น 85 
// (จากคะแนนสอบของทุกคนรวมกันได้ 340 นำมาหารจำนวนคน 4 คน)


// แนวคิดที่ถูกต้อง
// สร้างตัวแปร sum เพื่อเก็บผลรวม
// ใช้ loop บวกค่าทีละตัว
// เอาผลรวม ÷ จำนวนข้อมูล
// แสดงค่าเฉลี่ย


function findAverageScore(scores) {
  let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
  }
let average = sum / scores.length;
  console.log(average);
}

findAverageScore([85, 90, 77, 88]);
//---------------------------------------------------------------------------------------------------------
// แบบสั้น 
function findAverageScore(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  console.log(sum / scores.length);
}