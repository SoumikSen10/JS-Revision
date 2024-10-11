//Promises

/*
The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states :

a) pending : initial state, neither fulfilled nor rejected

b) fulfilled : meaning that the operation was completed successfully

c) rejected : meaning that the operation failed

*/

//Let's see different types of promise implementation

// Type 1 ----------------------------

/*
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task here

  setTimeout(function () {
    console.log("Async task is completed");
    resolve(); //promise getting resolved after task completed
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed!");
});
*/

// Type 2 ----------------------------

/*
new Promise(function (resolve, reject) {
  // Do an async task here
  setTimeout(function () {
    console.log("Async task 2");
    resolve(); // promise resolved after task completion
  }, 2000);
}).then(function () {
  console.log("Promise is consumed!");
});
*/

// Type 3 ----------------------------

/*
const promiseThree = new Promise(function (resolve, reject) {
  // perform some async task here
  setTimeout(function () {
    resolve({ username: "testName", email: "testmail@gmail.com" }); //passing user info as parameter
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
*/

// Type 4 ----------------------------

/*
const promiseFour = new Promise(function (resolve, reject) {
  // perform async task here
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "testName", email: "testmail@gmail.com" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected!");
  });
*/

// Type 5 ----------------------------

/* const promiseFive = new Promise(function (resolve, reject) {
  // perform some async task
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1234" });
    } else {
      reject("ERROR : JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive(); */

//Understanding with real life example

//using async await
/* async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

getAllUsers(); */

//using .then() chaining
/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  }); */

/*

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404,etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

*/
