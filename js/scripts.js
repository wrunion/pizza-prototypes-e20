// Business Logic --------------------

class Order {
  constructor(customerName) {
    this.customerName = customerName;
    this.items = [];
  }
  // THIS WORKS
  addItem(item) {
    this.items.push(item);
  }
  
  // removeItem() {
  //   // Stretch goal. If everything else is done, assign IDs to each item, and give the customer the option of deleting itemes or changing quanitiies on the order confirmation form.
  // }

  // THIS WORKS
  calculateTotal() {
    let total = 0;
    for (let i=0; i<this.items.length; i++) {
      let itemPrice = this.items[i].price;
      total += itemPrice;
    }
    return total;
  }
  thankCustomer() {
    return `Thank you for your order, ${this.customerName}! Your total is $${this.calculateTotal()}. \n\n Your food will be ready for pickup in 15 minutes.`;
  }
}

class Pizza {
  constructor(size, toppings=[], quantity) {
    this.size = size;
    this.toppings = toppings;
    this.quantity = quantity;
    this.price = this.getPrice();
  }
  getPrice() {
    let total = 0;
    //Set base price of pizza based on size
    if (this.size === "small") { total += 10; }
    if (this.size === "medium") { total += 15; }
    if (this.size === "large") { total += 20; }
    //Check to see if user ordered extra toppings. If so, charge them $1 extra per topping.
    if (this.toppings) { total += this.toppings.length; }
    total *= this.quantity;
    return total;
  }
}

// Constructors for other menu items
class DrinkOrder {
  constructor(quantity) {
    this.quantity = quantity;
    this.basePrice = 3;
    this.price = this.quantity * this.basePrice;
  }
}

class BreadSticksOrder {
  constructor(quantity) {
    this.quantity = quantity;
    this.basePrice = 5;
    this.price = this.quantity * this.basePrice;
  }
}

//Tests: WORKING ------------------------
let order = new Order("Leia Organa");
let pizza = new Pizza("small", [], 1);
let pizza2 = new Pizza("large", [], 1);
let drinkOrder = new DrinkOrder(5);
let breadSticksOrder = new BreadSticksOrder(1); 
order.addItem(drinkOrder);
order.addItem(breadSticksOrder);
order.addItem(pizza);
order.addItem(pizza2);
console.log(order.calculateTotal());
console.log(order.thankCustomer());
//Expected output: 50. Actual output: 50. TEST PASSED!!!

