class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return "Wofff...";
  }
}
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
  fly() {
    return "Fly.......";
  }
}
const dog1 = new SuperDog("Daisy");
const dog2 = new Dog("Tiger");
const dog3 = new Dog("Bruno");
Dog.prototype.play = () => console.log("Playing Now!");
console.log(dog1.bark());
console.log(dog1.fly());
