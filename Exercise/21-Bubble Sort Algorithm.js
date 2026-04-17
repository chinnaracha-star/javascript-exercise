// 1. Loop ผ่าน Array ตั้งแต่ index 0 จนถึง (index สุดท้าย -1)
//          <ในการวนแต่ละครั้ง ให้
//                   Loop ผ่าน Array ตั้งแต่ index 0 จนถึง (numbers.length - 1 - รอบ Loop ภายนอกปัจจุบัน)
//                        <ในการวนแต่ละครั้ง ให้ใช้ If-Else
//                                   <ถ้า people[j].age < people[j + 1].age
//                                          ให้สลับตำแหน่งของ people[j].age และ people[j + 1].age >>>
//  2. แสดงค่าของ people บนหน้าจอ

function bubbleSortObjectMinToMax(people) {
    for(let i = 0; i <people.length -1; i +=1){
        for(let j = 0; j < people.length -1 -i; j+=1)
            if (people[j].age > people[j+1].age){
                let qqq = people[j];
                people[j] = people[j+1];
                people[j+1] = qqq;
            }
    }
  return people;
}
let people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bill", age: 28 },
  { name: "Alice", age: 22 }
]
console.log(bubbleSortObjectMinToMax(people))