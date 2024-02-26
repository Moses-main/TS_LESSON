function add(a: number, b: number) {
  return a + b;
}

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

// Rest Parameters

function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

console.log(sum([2, 2, 5, 2]));
