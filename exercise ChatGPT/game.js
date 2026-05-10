// ฟังก์ชันสุ่มเลข 1-6 >> 1-100
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
let dice = 0; // เริ่มต้นด้วยค่าที่ยังไม่เข้าเงื่อนไข
let count = 0; // ตัวนับจำนวนรอบ
 
console.log('🎲 เริ่มทอยลูกเต๋าหาเลข 6...');
 
// เงื่อนไข: "ตราบใดที่ dice ยังไม่ใช่ 6 ให้ทำต่อไป"
while (dice !== 6) {
  dice = rollDice(); // ทอยใหม่
  count++; // นับรอบเพิ่ม
  console.log(`รอบที่ ${count}: ได้เลข ${dice}`);
}
 
console.log(`🎉 เย้! เจอเลข 6 แล้ว (ใช้ความพยายามไป ${count} รอบ)`);
 
 