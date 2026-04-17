//Linear Search


// เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm ที่ค้นหาว่า numbers มีเลข 7 หรือไม่ 
// หากมีให้เอา Index ของ 7 มาแสดงบนหน้าจอ เช่น

// ถ้า numbers = [3, 1, 7, 9, 2] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 2
// ถ้า numbers = [2, 10, 1, 7, 9, 20, 15] ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1
 numbers = [2, 10, 1, 7, 9, 20, 15]
 let inde = -1 
 for (let i = 0; i < numbers.length; i+=1 ){
    if (numbers[i] === 7){
        inde = i ;
    }
 }
console.log(inde);

//--------------------------------------------------------------------------------------------------------------
// เรามี Array cities ซึ่งบรรจุชื่อเมือง และมี Variable searchCity เก็บค่าเมืองที่ต้องการค้นหา 
// ให้เขียน Algorithm ที่ค้นหาว่า cities มี searchCity อยู่หรือไม่ หากมีให้เอา Index ของ searchCity 
// มาแสดงบนหน้าจอ เช่น

// ถ้า cities = ["Sydney", "Paris", "London", "Tokyo", "New York"] และ searchCity = "Tokyo" 
// ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 3
// ถ้า cities = ["Mumbai", "Bangkok", "Sydney", "Beijing"] และ searchCity = "Rome" 
// ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1

 cities = ["Sydney", "Paris", "London", "Tokyo", "New York", "Mumbai", "Bangkok", "Sydney", "Beijing"]
 let indx = -1;
 for (let i = 0; i < cities.length; i+=1){
    if(cities[i] === "Mumbai"){
        indx = i;
    }
 }

console.log(indx)
//--------------------------------------------------------------------------------------------------------------
// เรามี Array fruits ซึ่งบรรจุรายชื่อผลไม้
// ให้เขียน Algorithm ที่ค้นหาว่า fruits มีคำว่า "pear" อยู่หรือไม่
// หากมีให้เอา Index ของ "pear" มาแสดงบนหน้าจอ
// เช่น ถ้า fruits = ["apple", "banana", "pear", "orange", "mango"]
// ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 2
//           <<<<<วิธีคิด>>>>>>
// <ในการวนแต่ละครั้ง ให้ใช้ If-Else
//     <ถ้าสมาชิกตัวนั้น === "pear" 
//             ให้ทำการ Reassign ค่าให้ index มีค่าเท่ากับตำแหน่งที่พบ>>

fruits = ["apple", "banana", "pear", "orange", "mango"]
let inex = -1
for (let i = 0; i < fruits.length; i+= 1){
    if (fruits[i]=== "orang"){
        inex = i 
    }
}

console.log(inex)