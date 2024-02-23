function add(a: number, b: number) {
  return a + b;
}

let sum = add(1, 4);
console.log(sum);

// Named function
function greet(name: string) {
  return "hello" + name;
}

// function expression
let greet2 = function (name: string) {
  return "hello" + name;
};

// Arrow function
let greet3 = (name: string) => {
  return "hello" + name;
};

// shorthand arrow function
let greet4 = (name: string) => "hello" + name;

// function constructor
const greet5 = new Function("name", 'return "hello" + name');
