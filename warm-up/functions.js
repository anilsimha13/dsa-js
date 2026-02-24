function printHelloWorld() {
  console.log("Hello World!");
}
printHelloWorld();

function greet(yourName) {
  console.log("Hello Mr/Miss/Mrs. " + yourName);
}

greet("Anil Simha");
greet("Taksh");
greet("Takshya");

function sum(a, b) {
  const c = a + b;
  console.log(c);
}

sum(10, 20);
sum(100, 200);

function multiply(a, b) {
  let multiply = a * b;
  console.log(multiply);
}

multiply(10, 10);

function square(x) {
  let res = x * x;
  return res;
}

const squareOfNumber = square(4);
console.log(squareOfNumber);
