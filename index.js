// const hello = (name) => console.log(`Hello ${name}`);

// hello("srinu");

//Default imports in Common js modules
// const add = require("./calculator");
// console.log(add(8, 10));

//named imports in common js modules
const { add, sub } = require("./calculator.js");
console.log(add(8, 9));
console.log(sub(8, 7));
