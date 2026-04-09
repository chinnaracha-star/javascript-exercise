// เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm ที่ค้นหาว่า numbers มีเลข 7 หรือไม่ 
// หากมีให้เอา Index ของ 7 มาแสดงบนหน้าจอ เช่น

// ถ้า numbers = [3, 1, 7, 9, 2] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 2
// ถ้า numbers = [2, 10, 1, 9, 20, 15] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1

// numbers = [3, 1, 7, 9, 2,]
// let index = -1;
// for (let i = 0 ; i < numbers.length ; i++) {
//     if (numbers[i] === 7) {
//         index = i;
//     }
// }
// console.log(index);
//--------------------------------------------------------------------------------------------------------------
// เรามี Array cities ซึ่งบรรจุชื่อเมือง และมี Variable searchCity เก็บค่าเมืองที่ต้องการค้นหา 
// ให้เขียน Algorithm ที่ค้นหาว่า cities มี searchCity อยู่หรือไม่ หากมีให้เอา Index ของ searchCity 
// มาแสดงบนหน้าจอ เช่น

// ถ้า cities = ["Sydney", "Paris", "London", "Tokyo", "New York"] และ searchCity = "Tokyo" 
// ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 3
// ถ้า cities = ["Mumbai", "Bangkok", "Sydney", "Beijing"] และ searchCity = "Rome" 
// ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1

cities = ["Sydney", "Paris", "London", "Tokyo", "New York"]
let searchCity = "Tokyo"   //เพิ่มเพื่อค้นหา
let index = -1;
for (let i = 0 ; i < cities.length ; i++)
    if (cities[i] === searchCity){
        index = i ;
    }

console.log(index);