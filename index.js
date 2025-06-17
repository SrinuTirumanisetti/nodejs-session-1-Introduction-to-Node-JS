// const hello = (name) => console.log(`Hello ${name}`);

// hello("srinu");

//named imports in common js modules
const calculator = require("./calculator");
const { add, sub } = calculator;
console.log(add(8, 9));
console.log(sub(8, 7));
