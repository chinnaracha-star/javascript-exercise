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
;