// Question 3: User Authentication
// Question #3: *User Authentication*

// - ให้เขียน Function `authenticateUser` ให้สมูบรณ์ โดยที่
//     - Function `authenticateUser` ทำหน้าที่ในการตรวจสอบว่า Username กับ Password ที่ส่งเข้ามาถูกต้องหรือไม่
//     - โดยที่ Function `authenticateUser` จะมี Variable `validUsername` และ `validPassword`
//     ที่เก็บข้อมูล Username และ Password ที่ถูกต้องเอาไว้
//         - ถ้า Username กับ Password ที่ส่งเข้ามาถูกต้อง
//         - Function `authenticateUser` จะ Return ข้อความว่า `"Login successful."`
//         - ถ้า Username กับ Password ที่ส่งเข้ามาไม่ถูกต้อง `authenticateUser`
//         - Function `authenticateUser` จะ Return ข้อความว่า `"Login failed. Please check your username
//         and password."`
//         - (ถ้าใช้ Ternary operator จะได้คะแนนโบนัส 🤩)
// - เมื่อนำ Function ไป Execute จะต้องได้ผลลัพธ์ตรงตามที่เขียนไว้ในโค้ดตั้งต้น
//-------------------------------------------------------------------------------------------------------
function authenticateUser(username, password) {
  const validUsername = "user123";
  const validPassword = "securepass";

  // เริ่มเขียนโค้ดตรงนี้

//-----------------------------------------------------------------------------------

// return username === validUsername && password === validPassword
//   ? "Login successful."
//   : "Invalid username or password.";

//-----------------------------------------------------------------------------------

// ตัวอย่างการใช้งาน
const username1 = "user123";
const password1 = "securepass";

const username2 = "guest";
const password2 = "password123";

console.log(authenticateUser(username1, password1)); // Login successful.
console.log(authenticateUser(username2, password2)); // Login failed. Please check your username and password.
