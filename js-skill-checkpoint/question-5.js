// Question 5: Calculating Total Price in User's Cart
// - คุณกำลังสร้าง Application ตะกร้าสินค้าออนไลน์
// - ผู้ใช้สามารถเพิ่มสินค้าลงในตะกร้าของพวกเขาได้ และคุณต้องคำนวณราคารวมของสินค้าทั้งหมดในตะกร้า
// - ให้เขียน Function `calculateTotalPrice` ซึ่งเป็น Function ที่ใช้คำนวณราคาสินค้ารวมในตะกร้า
// - Function `calculateTotalPrice` จะรับ Array ของ Object สินค้าเป็น Parameter
//     - Object ของสินค้ามีลักษณะดังนี้
//     - `name` (string): ชื่อของสินค้า
//     - `price` (number): ราคาของสินค้า
//     - `quantity` (number): จำนวนของสินค้าในตะกร้า
// - เมื่อนำ Function ไป Execute จะต้องได้ผลลัพธ์ของราคาสินค้าแสดงบน Console เป็น `50`
//---------------------------------------------------------------------------------------------------
let total = 0;
function calculateTotalPrice(cart) {
  // เริ่มเขียนโค้ดตรงนี้
  let total = 0;
  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50

อธิบาย code  แบบละเอียดให้หน่อย เพื่อนำไปสอบตัวต่อตัว