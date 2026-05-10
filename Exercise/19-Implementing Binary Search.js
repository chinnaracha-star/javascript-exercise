// เรามี Array numbers ซึ่งบรรจุตัวเลขที่เรียงลำดับจากน้อยไปมาก
// ให้เขียน Algorithm ที่ค้นหาว่า numbers มีเลข 16 หรือไม่ หากมีให้เอา Index ของ 16 มาแสดงบนหน้าจอ เช่น
// ถ้า numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 6 
// ซึ่งคือตำแหน่ง Index ของ 16
// ถ้า numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1 
// เพราะไม่มี 16 ใน numbers
// เราสามารถใช้ Binary Search Algorithm ในการแก้โจทย์ข้อนี้ได้ด้วยขั้นตอนต่อไปนี้:
// Declare ตัว Variable left และกำหนดให้มีค่าตั้งต้นเป็น 0 (Index แรกของ Array)
// Declare ตัว Variable right และกำหนดให้มีค่าตั้งต้นเป็น numbers.length - 1 (Index สุดท้ายของ Array)
// Declare ตัว Variable index และกำหนดให้มีค่าเป็น -1
// ใช้ While Loop โดยกำหนดให้วนต่อไปเรื่อยๆ ตราบใดที่ left <= right ยังเป็นจริง



// <ในการวนแต่ละครั้ง ให้
//     1. Declare ตัว Variable mid และกำหนดค่าให้เป็น mid = Math.floor((left + right) / 2)
//     2. ใช้ If-Else
//         <ถ้า numbers[mid] === 16
//             ให้ทำการ Reassign ค่าให้ index มีค่าเท่ากับ mid และทำการ break Loop เพื่อสิ้นสุดการทำงาน>   
//         <ถ้าไม่เป็นไปตามเงื่อนไขข้างต้น แต่ numbers[mid] < 16
//             ให้ทำการ Reassign ค่าให้ left = mid + 1>
//         <ถ้าไม่เป็นไปตามเงื่อนไขทั้งหมดข้างต้น
//             ให้ทำการ Reassign ค่าให้ right = mid - 1>>


// numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// let left = 0;
// let right = numbers.length -1; 
// let index = -1;
// while (left<right ){
//       let mid = Math.floor((left + right)/2)
//       if (numbers[mid] === 15){
//         index = mid;
//         break;
//       }
//       else if (numbers[mid] < 15 ){
//         left = mid+1;
//       }
//       else 
//         right = mid-1;
// }
// console.log(index);
//----------------------------------------------------------------------------------------------------------
// เรามี Array numbers ซึ่งบรรจุตัวเลข
// ให้เขียนขั้นตอนของ Algorithm ที่ค้นหาว่า numbers มีเลข 7 หรือไม่ หากมีให้เอา Index ของ 7 มาแสดงบนหน้าจอ เช่น
// ถ้า numbers = [1, 3, 5, 7, 9, 11, 15, 17] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 3
// ถ้า numbers = [1, 3, 5, 9, 13, 15, 17, 19] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1


// <ในการวนแต่ละครั้ง ให้
//   1. Declare ตัว Variable mid และกำหนดค่าให้เป็น mid = Math.floor((left + right) / 2)
//   2. ใช้ If-Else
//         <ถ้า numbers[mid] === 7
//                         ให้ทำการ Reassign ค่าให้ index มีค่าเท่ากับ mid>
//               <ถ้าไม่เป็นไปตามเงื่อนไขข้างต้น แต่ numbers[ mid] < 7
//                   ให้ทำการ Reassign ค่าให้ left = mid + 1>
//               <ถ้าไม่เป็นไปตามเงื่อนไขทั้งหมดข้างต้น
//                       ให้ทำการ Reassign ค่าให้ right = mid - 1>>

numbers = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21]
let left = 0;
let right = numbers.length -1;
let index = -1;
while (left <= right){
      let mid = Math.floor((left + right)/2)
      if (numbers[mid] === 15){
        index = mid;
        break;
      } 
      else if (numbers[mid] < 15){
        left = mid +1;
      }
      else 
        right = mid-1;
}

console.log(index);


//----------------------------------------------------------------------------------------------------
// function findNumberSeven(numbers) {
// let left  = 0;
// let right = numbers.length - 1;
// let index = -1 ;

//    while (left <= right){
//     let mid = Math.floor((left + right)/ 2)
//       if (numbers[mid] === 9){
//         index = mid;
//         break;
//       }
//       else if (numbers[mid] < 7){
//         left = mid +1 ;
//       }
//       else 
//         right = mid -1;
//    }
//    return index;
// }
// numbers = [1, 3, 5, 7, 9, 13, 15, 17, 19]
// console.log(findNumberSeven(numbers));