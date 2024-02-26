"use strict";
function add(a, b) {
    return a + b;
}
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
// Rest Parameters
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([2, 2, 5, 2]));
//# sourceMappingURL=index.js.map