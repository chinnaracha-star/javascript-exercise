function isPalindrome(string) {
  // Start coding here
  let text = string.toLowerCase().replace(/\s/g, "");
  let reversed = text.split("").reverse().join("");
  return text === reversed;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
