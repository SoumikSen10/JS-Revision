// Using Object literal -------------
/* const user = {
  username: "Sam",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log(`Username : ${this.username}`);
    //console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails()); */

// Using constructor function -----------

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

/* 
//Logical Error which occurs at this step by overriding the values shows us why we need to use new keyword for instantiating new objects 

const userOne = User("Sam", 12, true);
const userTwo = User("Mike", 10, false);
console.log(userOne); */

// Now problem resolved after using new keyword
const userOne = new User("Sam", 12, true);
const userTwo = new User("Mike", 10, false);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);
