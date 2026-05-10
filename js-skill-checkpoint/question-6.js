// Question #6: Calculating Total Price in User's Cart
// - กำหนดให้มี Array ของ Object สินค้า ชื่อว่า `products`
// - ให้เขียน Function `filterInStockProducts` ที่รับ Parameter เป็น Array ของ Object สินค้า
// - Function `filterInStockProducts` ทำหน้าที่ในการกรองสินค้าที่หมดสต็อก (quantity เป็น 0)
//     - Function จะ Return ผลลัพธ์ออกมาเป็น Array อันใหม่ที่มี Value เป็นสินค้าที่มี `quantity` มากกว่า 0
// - เมื่อนำ Function ไป Execute จะต้องได้ผลลัพธ์แบบนี้บนหน้าจอ Console

//     ```jsx
//     [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
//     ```
//--------------------------------------------------------------------------------------------------
function filterInStockProducts(products) {
  return products.filter(function (product) {
    return product.quantity > 0;
  });
}

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]

อธิบาย code  แบบละเอียดให้หน่อย เพื่อนำไปสอบตัวต่อตัว