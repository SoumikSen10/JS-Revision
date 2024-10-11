// High order array loops

//const arr = [1, 2, 3, 4, 5];

// for of

/* for (const num of arr) {
  console.log(num);
} */

/* const greetings = "Hello World!";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
} */

// ---------------------Maps---------------------

/* const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

//console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
} */

// ---------Handling Objects------------
// for in loop
/* const myObject = {
  game1: "NFS",
  game2: "Spiderman",
  game3: "IGI3",
  game4: "Counter Strike",
  game5: "Prince of Persia",
};

for (const key in myObject) {
  console.log(key, ":", myObject[key]);
} */

/* const programming = ["js", "java", "py", "cpp", "rb"];

for (const key in programming) {
  console.log(programming[key]);
} */

// for each loop
//const programming = ["js", "java", "py", "cpp", "rb"];

/* programming.forEach((el) => console.log(el));
 */

/* programming.forEach(function (el) {
  // do whatever you want with these elements while traversing
  console.log(el + "-test");
}); */

// learning it's entire syntax
/* console.log("Element - index - entire array");
programming.forEach((item, index, arr) => {
  console.log(item, "-", index, "-", arr);
}); */

// Handling objects with forEach
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((el) => {
  console.log(
    `Language name is : ${el.languageName} and Language File name is : ${el.languageFileName}`
  );
});
