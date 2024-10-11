const user = {
  username: "Sam",
  email: "testmail@gmail.com",
  gender: "male",
  showUser: function () {
    console.log(`User ${this.username}'s gender is ${this.gender}`);
  },
};

console.log(user);

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") console.log(`${key} : ${value}`);
}

console.log(user.showUser());
