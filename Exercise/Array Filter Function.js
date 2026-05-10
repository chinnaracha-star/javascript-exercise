//Array Filter Function
let numbers = [100, 2000, 10, -20, 6, 1500];

function checkLow30 (number){
     return number < 30 ;
}
let result = numbers.filter(checkLow30);
console.log(result);