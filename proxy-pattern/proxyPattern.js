const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        "hmm this property does not seem to exists on the target object"
      );
    } else console.log(`The valus of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log("Sorry you can only pass numeric values for age");
    } else if (prop === "name" && value.length < 2) {
      console.log("You need to provide a valid name.");
    } else {
      console.log(`Changed ${prop} form ${obj[prop]} to ${value}`);
      return Reflect.set(obj, prop, value);
    }
  },
});
personProxy.name = "Abhishek";
personProxy.age = 34;
