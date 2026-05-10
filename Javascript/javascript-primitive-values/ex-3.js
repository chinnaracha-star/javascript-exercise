// Exercise #3: Uploading Progress

let totalFileSize = 250000;
let uploadedSize = 30000;

// Start coding here
//let uploadProgress = (30000 / 250000) * 100;

let uploadProgress = (uploadedSize / totalFileSize) * 100;
console.log (uploadProgress)