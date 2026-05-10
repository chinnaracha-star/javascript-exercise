const nums = [5, 2, 9, 1];

let sum = nums.reduce((acc , current) => {
     if (current > acc){
      return current;
    } 
    return acc;
},nums[0]);    

console.log(sum);
//-------------------------------------------------------------------------------
const numss = [5, 2, 9, 1];

const max = numss.reduce((acc, current) => {
  if (current > acc) {
    return current;
  }
  return acc;
}, numss[0]);

console.log(max); // 9




//----------------------------------------------
แบบ ที่ต้องหัดเขียน  ของ Function 
let orders = [
  { orderId: 'A001', totalPrice: 2500 },
  { orderId: 'A002', totalPrice: 4000 },
  { orderId: 'A003', totalPrice: 6000 },
];

let totalSum = orders.reduce(function (accumulator, order) {      //<<<<<<<<<<<<<<<<<<<<<<<           
  return accumulator + order.totalPrice;
}, 0);

console.log(totalSum);