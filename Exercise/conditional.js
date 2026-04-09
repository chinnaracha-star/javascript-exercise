const { BlockList } = require("node:net");

let TechUp = 2
let oe;


if (TechUp === 1) 
    {
    oe = "ถอนเงิน";
} 
else {
    oe = "ลองใหม่";
}

console.log(oe)


// if (ตัวแปร) {
//     if BlockList
    
// } else {
//     else block
// }




function getday(num) {
  switch (num) {
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    case 7:
      return "Sunday";

    default:
      return "Invalid day";
  }
}
console.log(getday(2));