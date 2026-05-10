// เรามี Array customers ซึ่งบรรจุรายชื่อลูกค้าที่เข้ามาใช้บริการในร้าน ให้เขียน Algorithm ที่นำชื่อลูกค้าที่ปรากฏซ้ำมากที่สุดใน customers 
// มาแสดงบนหน้าจอ เช่น ถ้า customers = ["John", "Alice", "Alice", "Jenny", "Alice", "Charlie"] 
// ตัว Algorithm จะต้องแสดงผลออกมาเป็น “ลูกค้าที่เข้ามาใช้บริการบ่อยที่สุดคือ Alice” เพราะ Alice เป็นชื่อที่พบมากที่สุด (3 ครั้ง) 
// ถ้า customers = ["Emma", "Noah", "Ava", "Emma", "Ella"] 
// ตัว Algorithm จะต้องแสดงผลลัพธ์ออกมาเป็น “ลูกค้าที่เข้ามาใช้บริการบ่อยที่สุดคือ Emma” เพราะ Emma เป็นชื่อที่พบมากที่สุด (2 ครั้ง)

// แนวคิดของ Algorithm
// สร้างตัวแปร (เช่น dictionary / map) เพื่อเก็บจำนวนครั้งของแต่ละชื่อ
// วนลูปผ่าน customers
// ทุกครั้งที่เจอชื่อ → เพิ่ม count
// หลังจากนับเสร็จ → หา key ที่มีค่า count มากที่สุด
// แสดงผลลัพธ์

function findMostFrequentCustomer(customers) {
    const countMap = {};

    // นับจำนวน
    for (let name of customers) {
        countMap[name] = (countMap[name] || 0) + 1;
    }

    // หาค่ามากที่สุด
    let maxCount = 0;
    let mostFrequent = "";

    for (let name in countMap) {
        if (countMap[name] > maxCount) {
            maxCount = countMap[name];
            mostFrequent = name;
        }
    }

    console.log(`ลูกค้าที่เข้ามาใช้บริการบ่อยที่สุดคือ ${mostFrequent}`);
}

//ตัวอย่างการทำงาน
findMostFrequentCustomer(["John", "Alice", "Alice", "Jenny", "Alice", "Charlie"]);
// ลูกค้าที่เข้ามาใช้บริการบ่อยที่สุดคือ Alice

findMostFrequentCustomer(["Emma", "Noah", "Ava", "Emma", "Ella"]);
// ลูกค้าที่เข้ามาใช้บริการบ่อยที่สุดคือ Emma