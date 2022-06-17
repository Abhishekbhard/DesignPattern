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

//## Prototype Chain :- When we try to access the property that not directly availale on an object javascricpt recursively
// walks down all the objects that __propto__ points to, until it's find the property.
