# DSA - Javascript

_By Akshay Saini_

_Learning from NamasteDev Platform_

## Table of content

- [1. Introduction](#1-introduction)
  - [1a. Introduction](#1a-introduction)
- [2. Warm Up](#2-warm-up)
  - [2a. Warm Up - Introduction](#2a-warm-up---introduction)
  - [2b. Programming 101](#2b-programming-101)
  - [2c. Functions, if-else](#2c-functions-if-else)
  - [2d. Loops-01](#2d-loops-01)

### 1. Introduction

#### 1a. Introduction

- DSA is Language agnostic
- DSA is more of approach, Solution , Time & Space complexity

### 2. Warm Up

#### 2a. Warm Up - Introduction

- Covers Programming 101
- Warmup to Javascript

#### 2b. Programming 101

- Location: [Programming101.js](/warm-up/programming101.js)
- `let` can be changed
- `const` cannot be changed
- Any JS code will be executed only in JS engine

##### Data types

- String
- Number
- Boolean

##### Arrays

- Index starts from `Zero`

- let arr = [2,12,14,15,55,67,69,98]

##### Objects

- Contains `key:value` pair

```js
let obj = {
  firstName: "Anil",
  lastName: "Simha",
  boolean: true,
  arr: [11, 12, 14],
};
//console.log(obj.firstName);
```

#### 2c. Functions, if-else

- Location: [Functions](/warm-up/functions.js)

```js
//Declaration of a function
function printHelloWorld() {
  console.log("Hello World!");
}
printHelloWorld(); // Calling a function
```

- Return a function and store the value in varaiable and print it on console

```js
function square(x) {
  let res = x * x;
  return res;
}

const squareOfNumber = square(4);
console.log(squareOfNumber);
```

##### if-else condition

- Location: [Conditional Statements](/warm-up/conditionalStatement.js)

```js
function checkNumberEvenOrOdd(pleaseEnterNumber) {
  if (pleaseEnterNumber % 2 == 0) {
    console.log("Given " + pleaseEnterNumber + " number is a Even Number");
  } else {
    console.log("Given " + pleaseEnterNumber + " number is a Odd Number");
  }
}
checkNumberEvenOrOdd(3);
checkNumberEvenOrOdd(4);
```

#### 2d. Loops-01

- Location : [Loops-01](/warm-up/loops01.js)
