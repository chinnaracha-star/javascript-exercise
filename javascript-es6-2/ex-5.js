function sum(...z) {
  let total = 0;
  for (let i = 0; i < z.length; i += 1) {
    total += z[i];
  }
  return total;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
