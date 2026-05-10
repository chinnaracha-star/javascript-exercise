let height = undefined;
let result;

function x(height) {
  return height ?? "Height is not defined";
}

result = x(height);

console.log(result);
