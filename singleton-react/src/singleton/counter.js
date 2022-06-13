let instance;
let counter = 0;
class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can not create multiple Instance");
    }
    instance = this;
  }
  getCounter() {
    return counter;
  }
  increment() {
    counter++;
  }
  decrement() {
    counter--;
  }
}
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
