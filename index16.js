/* class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai === masalaChai);
console.log(chai === Teacher);

console.log(chai instanceof Teacher);
console.log(masalaChai instanceof Teacher);
console.log(masalaChai instanceof User);
 */

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const sam = new User("Sam Altman");
// console.log(sam.createId()); //blocked it from getting accessed using static keyword
console.log(sam);
