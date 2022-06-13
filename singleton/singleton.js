let instance;
let counter = 0;
class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance");
    }
    instance = this;
  }
  getInstance() {
    return this;
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
