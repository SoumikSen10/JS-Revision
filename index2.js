//Object Literals

/* const obj = {
  name: "Soumik",
  age: 21,
  location: "Kolkata",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//both same
console.log(obj["name"], obj["location"]); //--> better practice
console.log(obj.name, obj.location); */

/* const mySymbol = Symbol("key1");
const obj = {
  name: "Sam",
  age: 20,
  location: "Delhi",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

obj.greeting = function () {
  console.log("Hello JS user");
};

obj.greetingTwo = function () {
  console.log(`Hello user, ${this.name}`);
};

console.log(obj.greeting());
console.log(obj.greetingTwo()); */

//const obj1 = new Object(); //singleton object
// The singleton pattern limits the number of instances of a particular object to just one.

//const obj1 = {}; //non-singleton object

/* obj1.id = "123abc";
obj1.name = "Sam";
obj1.isLoggedIn = false;

console.log(obj1); */

/* const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    username: {
      firstname: "Soumik",
      lastname: "Sen",
    },
  },
};

console.log(regularUser.email);
console.log(regularUser.fullname.username.firstname); */

/* const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

 const obj3 = Object.assign(obj1, obj2);
console.log(obj3); 

const obj4 = { ...obj1, ...obj2 }; //--> better and suggested way
console.log(obj4); */

/* const users = [
  {
    firstname: "Sam",
    lastname: "Stone",
  },
  {
    firstname: "Ram",
    lastname: "Shaw",
  },
  {
    firstname: "Mohan",
    lastname: "Lal",
  },
  {
    firstname: "Sohom",
    lastname: "Das",
  },
  {
    firstname: "Roham",
    lastname: "Saha",
  },
  {
    firstname: "Pritam",
    lastname: "Bose",
  },
]; */

/* console.log(Object.entries(users));

const arr1 = [],
  arr2 = [];

// Using a for loop to iterate through each user object
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  // Object.entries converts the object into an array of key-value pairs
  console.log(Object.entries(user));
  arr1.push(users[i].firstname);
  arr2.push(users[i].lastname);
}

console.log(arr1, arr2); */

/* console.log(users[1].firstname);
console.log(users); */

/* const test = {
  firstname: "Sohom",
  lastname: "Das",
}; */

/* console.log(Object.keys(test));
console.log(Object.values(test));
console.log(Object.entries(test)); */

//Object destructuring
const course = {
  courseName: "js in depth",
  price: "999",
  courseInstructor: "Sam",
};

const { courseInstructor } = course;
console.log(courseInstructor);

//another way
const { courseName: name } = course;
console.log(name);
