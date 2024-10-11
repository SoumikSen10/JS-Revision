// Scope
// Understanding let, var, const

//global scope
//var c = 300;
//let a = 300;
//const b = 60;

/* if (true) {
  //block scope
  //let a = 10;
  //const b = 20;
  //c = 30;
  //console.log(a);
  //console.log(b);
} */

//console.log(a);
//b = 90;
//console.log(b);
//console.log(c);

// scope level and mini hoisting
/* function one() {
  const username = "Sam";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //console.log(website);
  two();
}

one(); */

console.log(addone(6));

function addone(num) {
  return num + 1;
}

//console.log(addTwo(6)); // in this case gives error

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(6));
