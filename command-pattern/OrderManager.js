class OrderManager {
  constructor() {
    this.orders = [];
  }
  placeOrder(order, id) {
    this.orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  }
  trackOrder(id) {
    return `Your order ${id} will arrive in 20 minutes.`;
  }
  cancelOrders(id) {
    this.orders = this.orders.filter((order) => order !== id);
    return `You have canceled your order ${id}`;
  }
  getOrders() {
    return this.orders;
  }
}
const manager = new OrderManager();
console.log(manager.placeOrder("Pad Thai", "1234"));
console.log(manager.trackOrder("1234"));
console.log(manager.placeOrder("i", "124"));

console.log(manager.cancelOrders("1234"));

console.log(manager.getOrders());
