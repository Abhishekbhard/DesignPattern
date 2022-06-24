class Dog {
  constructor(name) {
    this.name = name;
  }
}
const animalFunctionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping"),
};
const dogFunctionality = {
  bark: () => console.log(`Wofff....`),
  wagTail: () => console.log(`Waging my tail!`),
  play: () => console.log("playing"),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};
Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");
pet1.bark();
pet1.wagTail();
pet1.sleep();
