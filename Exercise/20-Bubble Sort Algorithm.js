// 1. Loop ผ่าน Array ตั้งแต่ index 0 จนถึง (index สุดท้าย -1)
// <ในการวนแต่ละครั้ง ให้
//         Loop ผ่าน Array ตั้งแต่ index 0 จนถึง (numbers.length - 1 - รอบ Loop ภายนอกปัจจุบัน)
//              <ในการวนแต่ละครั้ง ให้ใช้ If-Else
//                         <ถ้า numbers[j] > numbers[j + 1]
//                                ให้สลับตำแหน่งของ numbers[j] และ numbers[j + 1]  >>>
// 2. แสดงค่าของ numbers บนหน้าจอ



// function bubbleSortMinToMax(numbers) {
//     for (let i = 0; i < numbers.length -1; i+=1){
//       for(let j = 0; j < numbers.length -1 -i; j+=1){
//         if(numbers[j] > numbers[j+1]){
//           let temp = numbers[j]
//           numbers[j] = numbers[j+1]
//           numbers[j+1] = temp;
//         }
//        }
//     }
//     return numbers;
// }
// numbers = [64, 34, 25, 12, 22, 11, 90]
// console.log(bubbleSortMinToMax(numbers))
//-----------------------------------------------------------------------------------------------
function bubbleSortMinToMax(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] > numbers[j+1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    return numbers;
}

let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortMinToMax(numbers));


//--------------------------------------------
// เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm ที่เรียงข้อมูลใน numbers จากมากไปน้อย 
// โดยใช้ Bubble Sort Algorithm เช่น ถ้า numbers = [64, 34, 25, 12, 22, 11, 90] 
// ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น [90, 64, 34, 25, 22, 12, 11]

function bubbleSortMaxToMin(numbers) {
  for (let x = 0; x < numbers.length -1; x+=1){
    for(let y = 0; y < numbers.length -1 -x; y+=1){
        if (numbers[y] < numbers[y+1]){
            let tttt = numbers[y];
            numbers[y] = numbers[y+1];
            numbers[y+1] = tttt;
        }
    }
  }
  return numbers;
}
numbers = [64, 34, 25, 12, 22, 11, 90]
console.log(bubbleSortMaxToMin(numbers));