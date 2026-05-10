// let thailand = {};

// let A = "region";
// let B = "population";
// thailand[A] = "Southeast Asia";
// console.log(thailand); 
// thailand[B] = 69.8;
// console.log(thailand);
//-----------------------------------------------------------------------------------------------
// let AA = {};
// let b = "names";
// let a = "name";

// AA.a = "Chin";        //ตัว Key จะเปลี่ยนเป็น a 
// console.log(AA);
// AA[b] = "S"           //ตัว Key  จะไม่เปลี่ยน 
// console.log(AA);
//-----------------------------------------------------------------------------------------------
// const dish1 = {
//   name: "Korma",
//   type: "Main Course",
//   country: "India",
//   spicy: true
// };

// const dish2 = {
//   name: "Mango Sticky Rice",
//   type: "Dessert",
//   country: "Thailand",
//   spicy: false
// };

// /*Start coding here 🤩*/
// let a = "vegetarian"

// dish1[a] = false;
// // dish1.vegetarian = false;
// dish2.vegetarian = true;
// console.log(dish1);
// console.log(dish2);
//-----------------------------------------------------------------------------------------------
// กำหนดให้ Variable blueColor มีค่าเท่ากับ Value ลำดับที่ 3 ของ Array colors
// กำหนดให้ Variable fourthColor มีค่าเท่ากับ Value ลำดับที่ 4 ของ Array colors
// กำหนดให้ Variable fifthColor มีค่าเท่ากับ Value ลำดับที่ 5 ของ Array colors
// กำหนดให้ Variable tenthColor มีค่าเท่ากับ Value ลำดับที่ 10 ของ Array colors
// จากนั้นให้ console.log ค่าที่อยู่ใน Variable blueColor, fourthColor, fifthColor และ tenthColor ออกมาทางหน้าจอแล้วสังเกตผลลัพธ์
// let colors = ["red", "green", "blue", "khaki", "orange"];
// Start coding here
// let blueColor = colors[2];
// let fourthColor = colors[3] 
// let fifthColor = colors[4]
// let tenthColor = colors[10]

// console.log(blueColor);
// console.log(fourthColor);
// console.log(fifthColor);
// console.log(tenthColor);
//-----------------------------------------------------------------------------------------------
// กำหนดให้ Variable alex มีค่าเท่ากับ Value ที่มาจาก Key name ของพนักงานที่ชื่อ Alex
// กำหนดให้ Variable alexHobbies มีค่าเท่ากับ Value ที่มาจาก Key hobbies ของพนักงานที่ชื่อ Alex
// กำหนดให้ Variable alexAndJamesAge มีค่าเท่ากับอายุของ Alex และ James รวมกัน
// จากนั้นให้ console.log ค่าที่อยู่ใน Variable alex, alexHobbies และ alexAndJamesAge ออกมาทางหน้าจอแล้วสังเกตผลลัพธ์
// const employees = [
//     {
//         name: "James",
//         age: 40,
//         hobbies: ["Football", "Social media"],
//     },
//     {
//       name: "Alex",
//       age: 25,
//       hobbies: ["Cryptocurrency", "Social media"],
//     },
// ];
// // Start coding here
// let alex = employees[1].name;
// let alexHobbies = employees[1].hobbies;
// let alexAndJamesAge = employees[0].age + employees[1].age

// console.log(alex);
// console.log(alexHobbies);
// console.log(alexAndJamesAge);
//-----------------------------------------------------------------------------------------------
// จากโค้ดใน Exercise #2 ให้เขียนโค้ดตามโจทย์ที่กำหนด
// ให้เพิ่มข้อมูลของพนักงาน 2 คนที่อยู่ในรูปแบบของ Object เข้าไปใน Array ที่ชื่อ employees
// เมื่อเพิ่มพนักงานเสร็จแล้ว ให้ console.log เพื่อดูค่าของ Array employees
// ซึ่ง Object จะมี Property ดังนี้
// พนักงานคนที่ 1 มี Property ของ Object ดังนี้
// Key name มี Value เป็น "Alicia"
// Key age มี Value เป็น 29
// Key hobbies มี Value เป็น “Shopping" และ “Reading novels"
// พนักงานคนที่ 2 มี Property ของ Object ดังนี้
// Key name มี Value เป็น "Kody"
// Key age มี Value เป็น 19
// Key hobbies มี Value เป็น “Computer games" และ “Wakeboard"

// const employees = [
//     {
//         name: "James",
//         age: 40,
//         hobbies: ["Football", "Social media"],
//     },
//     {
//       name: "Alex",
//       age: 25,
//       hobbies: ["Cryptocurrency", "Social media"],
//     },
// ];

// employees.push(
//     {name: "Alicia",
//         age: 29,
//         hobbies: ["Shopping", "Reading novels"] },
//     {name: "Kody",
//         age: 19,
//         hobbies: ["Computer games" , "Wakeboard"]

//     }
// )
// console.log(employees);
//----------------------------------------------------------------------------------
// const student = {
//       name: "John Doe",
//       age: 18,
//       grade: 12,
//       subjects: ["Math", "Science", "History"],
//     };
//     console.log("Student Name: " + student.name);
//     console.log("Student Age: " + student.age);
//     console.log("Student Grade: " + student.grade);
//     console.log("Student Subjects: " + student.subjects);
//--------------------------------------------------------------------------------------------------------------
// กำหนดให้ Variable isArray มีค่าเท่ากับ ผลลัพธ์ที่ได้จากการตรวจสอบว่า Array orders เป็น Array จริงๆ หรือไม่
// กำหนดให้ Variable creditCardTypeOfBlindermann มีค่าเท่ากับ Value ที่มาจาก Key creditCardType ของลูกค้าชื่อ Toinette Blindermann
// ให้ Reassign ค่าของ Key creditCardType ของลูกค้าชื่อ Toinette Blindermann ให้เป็น “visa"
// กำหนดให้ Variable productQuantityOfJoannet มีค่าเป็น Value ที่มาจาก Key productQuantity ของลูกค้าชื่อ Anjela Joannet
// กำหนดให้ Variable totalPurchaseOfDary มีค่าเป็น Value เกิดจากการคำนวนยอดซื้อสินค้ารวมของลูกค้าชื่อ Celia Dary
// 🕵🏼‍♀️  Hint: ยอดซื้อสินค้ารวมหมายถึง ราคาสินค้า x จำนวนสินค้า
// ให้ลบ Object ของลูกค้าชื่อ Brenn Hugk ที่อยู่ใน Array orders
// เมื่อลบ Object เสร็จแล้วให้ทำการแสดงผลค่าของ orders ออกมาดูทางหน้าจอ
let orders = [
    {
      id: 1,
      customerName: "Brenn Hugk",
      productName: "Chocolate - Milk, Callets",
      productPrice: 94690,
      productQuantity: 35,
      creditCardType: "solo",
    },
    {
      id: 2,
      customerName: "Celia Dary",
      productName: "Bread - Pumpernickle, Rounds",
      productPrice: 10746,
      productQuantity: 87,
      creditCardType: "jcb",
    },
    {
      id: 3,
      customerName: "Toinette Blindermann",
      productName: "Bar - Granola Trail Mix Fruit Nut",
      productPrice: 94191,
      productQuantity: 31,
      creditCardType: "switch",
    },
    {
      id: 4,
      customerName: "Anjela Joannet",
      productName: "Cheese - Parmesan Cubes",
      productPrice: 5131,
      productQuantity: 96,
      creditCardType: "diners-club-carte-blanche",
    },
    {
      id: 5,
      customerName: "Kennith Bussons",
      productName: "Wine - White, Pinot Grigio",
      productPrice: 94432,
      productQuantity: 75,
      creditCardType: "jcb",
    },
];
// Start coding here
let isArray = Array.isArray(orders)
console.log(isArray)
let creditCardTypeOfBlindermann = orders[2].creditCardType;
orders[2].creditCardType = "visa";
let productQuantityOfJoannet = orders[3].productQuantity;
let totalPurchaseOfDary = orders[1].productPrice * orders[1].productQuantity;
orders.shift();

console.log(creditCardTypeOfBlindermann)
console.log(productQuantityOfJoannet)
console.log(totalPurchaseOfDary)
console.log(orders)