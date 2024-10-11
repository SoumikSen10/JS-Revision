// map, filter and reduce

// -------------------filter-----------------------
/* const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);

console.log(newNums); // getting only numbers which satisfies the specified condition */

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// use filter to extract only books having genre as History
/* const userBooks = books.filter((book) => book.genre === "History");

console.log(userBooks1); */

// use filter to extract only books published on and after 2000
/* const userBooks1 = books.filter((book) => book.publish >= 2000);

console.log(userBooks1); */

// ------------------------map--------------------------

//const myNymbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const newNums = myNymbers.map((num) => num + 10);
console.log(newNums); */

// chaining
/* const newNums = myNymbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums); */

//---------------------------reduce-----------------------------

/* const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce(function (acc, currVal) {
  return acc + currVal;
}, 0); //0 is the initial value of accumulator

console.log(myTotal); */

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

// using reduce find the total bill of products added in the shopping cart

const totalBill = shoppingCart.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

console.log(`The total bill of the customer is : ${totalBill}`);
