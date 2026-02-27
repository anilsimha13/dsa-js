for (let i = 0; i <= 10; i++) {
  console.log("Hello World", i);
}
console.log("-----------");

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello World", i);
  //2 4 6 8
}
console.log("-----------");

for (let i = 5; i > 0; i--) {
  console.log(i);
  //5 4 3 2 1
}
console.log("-----------");

let arr = [10, 20, 30, 40, 50, 77, 33, 37];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("-----------");

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
console.log("-----------");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

console.log("-----WHILE LOOP------");

i = 0;

while (i < 9) {
  console.log(i);
  i++;
}
