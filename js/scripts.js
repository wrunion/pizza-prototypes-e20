// Business Logic --------------------

class Order {
  constructor(customerName) {
    this.customerName = customerName;
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem() {
    // Create a method for this here
  }
  calculateTotal() {
    // Note: only reun this method after all items have been added
    // Unless you only want a subtotal
    let total = 0;
    for (let i=0; i<this.items.length; i++) {
      let itemPrice = this.items[i].price;
      total += itemPrice;
    }
    return total;
  }
  thankCustomer() {
    return `Thank you for your order, ${this.customerName}! It will be ready for pickup in 15 minutes.`;
  }
}

class DrinkOrder {
  constructor(quantity) {
    this.quantity = quantity;
    this.basePrice = 3;
    this.price = this.quantity * this.basePrice;
  }
}

// Tests ------------------------
let order = new Order("Leia Organa");
let drinkOrder = new DrinkOrder(5);
order.addItem(drinkOrder);
console.log(order.calculateTotal());
// Expected output: 15. Actual output: 15. TEST PASSED!!!

class menuItem {
  constructor(itemName, smallPrice, mediumPrice, largePrice, addOnPrice) {

  }
}

