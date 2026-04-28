function english(age) {
  return `I am ${age} years old`;
}
function thai(age) {
  return `ฉันอายุ ${age} ปี`;
}
function chinese(age) {
  return `我 ${age} 岁`;
}
function addTwo(number) {
  return number + 2;
}
// callbackFunction
function Y(x, age) {
  return x(age);
}

console.log(Y(english, 30));
console.log(Y(chinese, 43));
console.log(Y(addTwo, 43));
