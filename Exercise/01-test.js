let subtract = (a, b) => a + b;
let r = subtract(2, 3);
console.log(subtract(2, 3));
console.log(r);

function addNumber(number1, number2) {
  const addresult = number1 + number2;
  console.log("ผลบวกคือ", addresult);
  return addresult;
}
addNumber(10, 5);
const o = addNumber(10, 5);
console.log(o);

let firstName = "Jane";
function greetings() {
  let message = "Hello, " + firstName;
  console.log(message);
}
greetings();
//-----------------------------------------------------------------------------------------------
let thailand = {};
let firstAttribute = "region";
let secondAttribute = "population";
let ages = "age";
let populations = "ประชากร";
thailand[firstAttribute] = "Southeast Asia";
console.log(thailand);
thailand[secondAttribute] = 69.8;
console.log(thailand);
thailand[ages] = 500;
console.log(thailand);
thailand[populations] = 73000000;
console.log(thailand);

delete thailand.ประชากร;
console.log(thailand);

//---------------------------------------------------------------------------------------

let x = 1;

for (x = 1; x <= 5; x += 1) {
  console.log(x);
}
console.log(x);
