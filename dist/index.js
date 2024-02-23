"use strict";
function add(a, b) {
    return a + b;
}
let sum = add(1, 4);
console.log(sum);
// Named function
function greet(name) {
    return "hello" + name;
}
// function expression
let greet2 = function (name) {
    return "hello" + name;
};
// Arrow function
let greet3 = (name) => {
    return "hello" + name;
};
// shorthand arrow function
let greet4 = (name) => "hello" + name;
// function constructor
const greet5 = new Function("name", 'return "hello" + name');
//# sourceMappingURL=index.js.map