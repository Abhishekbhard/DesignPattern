class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => console.log(`Wofff....`),
  wagTail: () => console.log(`Waging my tail!`),
  play: () => console.log("playing"),
};
Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");
pet1.bark();
pet1.wagTail();
