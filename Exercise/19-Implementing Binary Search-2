// เรามี Array students ซึ่งบรรจุชื่อนักเรียน (โดยที่ชื่อนักเรียนใน Array ถูกเรียงลำดับตามพจนานุกรมแล้ว) 
// และมี Variable searchStudent เก็บค่าชื่อนักเรียนที่ต้องการค้นหา

// ให้เขียนขั้นตอนของ Algorithm ที่ค้นหาว่า students มี searchStudent อยู่หรือไม่ หากมีให้เอา Index ของ 
// searchStudentมาแสดงบนหน้าจอ เช่น
// ถ้า students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"] 
// และ searchStudent = "John" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 7

// ถ้า students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"] 
// และ searchStudent = "Andrew" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1



// <ในการวนแต่ละครั้ง ให้
//     1. Declare ตัว Variable mid และกำหนดค่าให้เป็น mid = Math.floor((left + right) \ 2)
//     2. ใช้ If-Else
//         <ถ้า students[mid] === searchStudent
//                 ให้ทำการ Reassign ค่าให้ index มีค่าเท่ากับ mid>
//             <ถ้าไม่เป็นไปตามเงื่อนไขข้างต้น แต่ students[mid] < searchStudent
//                 ให้ทำการ Reassign ค่าให้ left = mid + 1>
//             <ถ้าไม่เป็นไปตามเงื่อนไขทั้งหมดข้างต้น
//                 ให้ทำการ Reassign ค่าให้ right = mid - 1>>
//-------------------------------------------------------------------------------------------
// students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
// let left = 0;
// let right = students.length -1 ;
// let index = -1;
// searchStudent = "George"
// while (left <= right){
//     let mid = Math.floor((left + right)/2)
//     if (students[mid] === searchStudent){ 
//         index = mid ;
//         break;
//     }
//     else if (students[mid] < searchStudent){
//         left = mid+1;
//     }
//     else 
//         right = mid -1;
// }

// console.log(index);

//-----------------------------------------------------------------------------------------------
// ใช้ function เข้าร่วม 
// students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid; // ✅ เจอแล้ว
//         }
//         else if (arr[mid] < target) {
//             left = mid + 1; // ไปขวา
//         }
//         else {
//             right = mid - 1; // ไปซ้าย
//         }
//     }

//     return -1; // ❌ ไม่เจอ
// }
// console.log(binarySearch(students, "Isaac"))

//---------------------------------------------------------------------------------------------
students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]

function findStudent(students, searchStudent) {
  let left = 0;
  let right = students.length -1;
  let index = -1;
    while (left <= right){
      let mid = Math.floor((left + right) /2)
      if (students[mid] === searchStudent){
        return  mid;       
      }
      else if (students[mid] < searchStudent){
        left = mid +1;
      }
      else 
      right = mid-1;
    }
    return -1
}
console.log(findStudent(students,"George"))