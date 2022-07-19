const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "Abhishek",
  lastName: "bhardwaj",
  email: "eduandabhi@gmail.com",
});
const user2 = createUser({
  firstName: "sultan",
  lastName: "singh",
  email: "sultan.singh@gmail.com",
});
console.log(user1.fullName());
console.log(user2);
