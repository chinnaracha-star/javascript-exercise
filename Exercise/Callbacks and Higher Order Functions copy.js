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

function Y(X, age) {
    return X(age);
}
Y(english, 24); 
Y(thai, 24); 

console.log(Y(addTwo, 15));
console.log(Y(chinese, 36))
console.log(Y(english, 24));
console.log(Y(thai, 24));