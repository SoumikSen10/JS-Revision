function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const user1 = new createUser("Sam", 25);
const user2 = new createUser("Mike", 22);

user1.printMe();
user1.increment();
user1.printMe();
user2.printMe();
user2.increment();
user2.printMe();

/*

Here's what happens behind the scenes when the new keyword is used :

A new object is created : The new keyword initiates the creation of a new Javascript object.

A prototype is linked : The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and menthods defined on the constructor's prototype.

The constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesnot return a non-primitive value (object,array,function, etc.), the newly created object.

*/
