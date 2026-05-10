//Exercise #1

let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000,
    );
  });
};
// Start coding here
let ShowData = (data) => {
  console.log(data);
};

getJohnProfile().then(ShowData);
