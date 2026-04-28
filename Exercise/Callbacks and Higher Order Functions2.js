// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
    return previousSalary + 5000;

}
function forEach(array, operation) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }

  return result;
}


// เรียกใช้งาน
const newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries);
console.log(newEmployeeSalaries); 


// //====================================

// 1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
// function addSalary5000

// 2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
// function forEach
//====================================




// function forEach(array, operation) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     result.push(operation(array[i]));
//   }

//   return result;
// }

// // ใช้กับข้อมูลเดิม
// const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

// function addSalary5000(previousSalary) {
//   return previousSalary + 5000;
// }

// // เรียกใช้งาน
// const newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

// console.log(newEmployeeSalaries);