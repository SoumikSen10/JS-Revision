// Immediately Invoked Function Expressions (IIFE)

//Example

/* (function dbConnection() {
  console.log("DB connected");
})();

((name) => {
  console.log(`DB connected too, ${name}!`);
})("Sam"); */

// Nullish Coalescing operator (??) : null undefined
// helps in checking for null and undefined safety

/* let val1 = 5 ?? 10;
let val2 = null ?? 10;
let val3 = undefined ?? 8;
console.log(val1);
console.log(val2);
console.log(val3); */

// Ternary operator

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
