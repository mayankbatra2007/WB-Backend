// 06 - EXPORT IN FILES

// Modules allow us to divide code into sep files
// module.exports is used to export data or functions
// from one CommonJS file to another

// math.js
function add(a, b){
    return a + b;
}

module.exports = add;

// app.js
const add = require("./math");
console.log(add(10,20)); // 30

