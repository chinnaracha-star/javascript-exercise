// Question 4: Shipping Cost Calculator
// - ให้เขียน Function `calculateShippingCost` ให้สมบูรณ์ โดยที่
// - Function `calculateShippingCost` จะมีหน้าที่ในการคำนวนค่า Shipping
//     - ถ้ายอดของ Order มีค่า 4000 ขึ้นไป Function จะ Return ข้อความว่า `"Shipping is free."`
//     - ถ้ายอดของ Order มีค่า 2000 ขึ้นไป Function จะ Return ข้อความว่า `"Shipping cost is 250 Baht."`
//     - นอกเหนือจากเงื่อนไขด้านบน Function จะ Return ข้อความว่า `"Shipping cost is 500 Baht."`
// - เมื่อนำ Function ไป Execute จะต้องได้ผลลัพธ์ตรงตามที่เขียนไว้ในโค้ดตั้งต้น
//---------------------------------------------------------------------------------------------------

function calculateShippingCost(orderTotal) {
  // เริ่มเขียนโค้ดที่นี่
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
