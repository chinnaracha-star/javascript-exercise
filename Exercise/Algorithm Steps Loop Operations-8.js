// เรามี Array fruits ซึ่งบรรจุรายชื่อผลไม้ และผลไม้บางชนิดมีปรากฏใน fruits มากกว่าหนึ่งครั้ง 
// ให้เขียน Algorithm ที่นับจำนวนครั้งที่ผลไม้แต่ละชนิดปรากฏใน fruits แล้วแสดงข้อมูลนี้บนหน้าจอในรูปแบบ 
// Object (Key คือชื่อผลไม้ และ Value คือจำนวนครั้งที่ผลไม้นั้นปรากฏใน fruits) เช่น

// ถ้า fruits = ["apple", "orange", "banana", "apple", "orange", "orange"] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 
// { apple: 2, orange: 3, banana: 1 } 
// เพราะว่าใน fruits มี “apple" 2 ครั้ง, มี “orange” 3 ครั้ง และมี “banana” 1 ครั้ง

const fruits = ["apple", "orange", "banana", "apple", "orange", "orange"];

const result = {};

for (let fruit of fruits) {
  if (result[fruit]) {
    result[fruit]++;
  } else {
    result[fruit] = 1;
  }
}

console.log(result);