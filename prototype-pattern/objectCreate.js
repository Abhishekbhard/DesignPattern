const dog = {
  bark() {
    return "Wofff..";
  },
  fly() {
    return "Flying..";
  },
};
const pet1 = Object.create(dog);
console.log(pet1.bark()); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));
