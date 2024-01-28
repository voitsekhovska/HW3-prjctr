"use strict";

// 1. Вивод парних чисел

// з for:
let value = +prompt("Введіть число: ");

if (isNaN(value)) {
  console.log("Помилка! Введіть число!");
} else {
  for (let i = 2; i < value; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// з while:
let data = +prompt("Введіть число: ");

if (isNaN(data)) {
  console.log("Помилка! Введіть число!");
} else {
  let x = 2;
  while (x < data) {
    if (x % 2 === 0) {
      console.log(x);
    }
    x++;
  }
}

// 2. Задача FizzBuzz

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 3. Додаткова задача*

let string = "42559125";
// let result = string.split("");
// console.log(result);

for (let i = 0; i < string.length; i++) {
  if (i < 5) {
    console.log(string.replace(i, "0"));
  } else if (i >= 5) {
    console.log(string.replace(i, "1"));
  } else {
    console.log(i);
  }
}
