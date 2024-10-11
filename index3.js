/* function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

console.log(result);
 */

/* function loginUser(username) {
  /* if (username === undefined) {
    console.log("Please enter username");
    return;
  } 
  // undefined and below syntax both same meaning
  if (!username) console.log("Please enter username!");
  return `${username} logged in!`;
} */

//console.log(loginUser("Sam"));
//loginUser("");
//loginUser();

//for setting default value
/* function loginUser(username = "Sam") {
  /* if (username === undefined) {
      console.log("Please enter username");
      return;
    } 
  // undefined and below syntax both same meaning
  if (!username) console.log("Please enter username!");
  return `${username} logged in!`;
} */

//loginUser("");

/* function calculateCartPrice(...prices) {
  let sum = 0;
  for (let price of prices) {
    //remember of iterates values but in iterates indices
    sum += price;
  }
  return sum;
}

console.log(calculateCartPrice(200, 400, 500)); */

/* const user = {
  username: "Sam",
  price: 999,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user); */

const numbers = [1, 2, 3, 4, 5];

function testNumbers(anyArray) {
  for (let num of anyArray) console.log(num);
}

testNumbers(numbers);
