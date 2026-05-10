// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = []; // Assignment: เตรียม Array สำหรับเก็บเฉพาะเลขคู่
// for (let i = 0; i < numbers.length; i++) { // Loop
//   if (numbers[i] % 2 === 0) {              // Arithmetic Operations + Comparison + If-Else
//     evenNumbers.push(numbers[i]);          // Data Structure Operations
//   }
// }

// //------------------------------------------------------------
// const productInfo = [
//   { name: "ปากกา", price: 15 },
//   { name: "สมุด", price: 30 },
//   { name: "ยางลบ", price: 10 },
//   { name: "ไม้บรรทัด", price: 25 }
// ]; // Assignment: เก็บชื่อสินค้าและราคาสินค้า
// const affordableProducts = []; // Assignment: เตรียม array สำหรับเก็บสินค้าที่ราคาผ่านเงื่อนไข
// for (let i = 0; i < productInfo.length; i++) { // Loop
//   if (productInfo[i].price <= 25) {            // Comparison + If-Else
//     affordableProducts.push(productInfo[i]);   // Data Structure Operations
//   }
// }

//--------------------------------------------------------------------------
//เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm ที่คัดเลือกเฉพาะเลขคู่ แล้วแสดงบนหน้าจอ 
//(ให้ใช้ Loop ร่วมกับ Array.push()) เช่น ถ้า numbers = [1, 2, 3, 4, 5, 6] ตัว Algorithm จะต้องแสดงผลลัพธ์ออกมาเป็น [2, 4, 6]
// let numbers = [1, 2, 3, 4, 5, 6];

// let x = [] ;

// for (i = 0 ; i < numbers.length ; i++){
//     if (numbers[i] % 2 !== 0) {
//       x.push(numbers[i])
//     } 
// }
// console.log(x);
//--------------------------------------------------------------------------
//เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm ที่นำตัวเลขที่มีค่าต่ำที่สุดใน numbers มาแสดงบนหน้าจอ 
//(ให้ใช้ Loop) เช่น ถ้า numbers = [10, 22, 31, 14, 6] ตัว Algorithm จะต้องแสดงผลลัพธ์ออกมาเป็น 6
numbers = [10, 22, 1, 31, 14, 6]
let min = numbers[0];

for (let i = 0 ; i < numbers.length ; i++){
    if  (numbers[i] < min) {
      min = numbers[i]
    }
}
console.log(min);
//--------------------------------------------------------------------------
// เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm ที่คัดเลือกเฉพาะเลขคู่ใน numbers มาบวกรวมกัน 
// แล้วนำผลรวมนี้มาแสดงบนหน้าจอ (ให้ใช้ Loop) เช่น ถ้า numbers = [1, 2, 3, 4] 
// ตัว Algorithm จะคัดเลือก 2 กับ 4 มาบวกกันแล้วแสดงผลลัพธ์ออกมาเป็น 6
numbers = [1, 2, 3, 4]
sum = 0;
for (let c = 0 ; c < numbers.length ; c++){
      if (numbers[c] % 2 ===0){
        sum+=numbers[c]
      } 
}
console.log(sum)