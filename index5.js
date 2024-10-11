// this and arrow function

/* const user = {
  username: "Sam",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to our website!`);
  },
};

user.welcomeMessage();
user.username = "Mohan";
user.welcomeMessage(); */
//console.log(this);

/* function test() {
  console.log(this);
}

test(); */

/* const test = (a) => {
  console.log(a);
};

test(5); */

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(10, 30));

const addThree = (num1, num2, num3) => num1 + num2 + num3;

console.log(addThree(20, 30, 50));
