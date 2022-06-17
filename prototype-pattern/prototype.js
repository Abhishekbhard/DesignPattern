class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return "Wofff...";
  }
}
const dog1 = new Dog("Tommy");
const dog2 = new Dog("Tiger");
const dog3 = new Dog("Bruno");
Dog.prototype.play = () => console.log("Playing Now!");
dog1.play();
