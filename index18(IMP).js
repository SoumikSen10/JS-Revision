//Encapsulation

/* class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value.toUpperCase();
  }

  //if you add getter, adding setter is mandatory
  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const sam = new User("sam_altman@gmail.com", "abcEFG12");
console.log(sam); */

// another syntax ------------------

const User = {
  _email: "testmail@gmail.com",
  _password: "abcFGH21",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const sam = Object.create(User);
console.log(sam.email);
