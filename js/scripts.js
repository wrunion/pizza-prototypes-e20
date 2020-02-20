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
  removeItem() {
    // Create a method for this here
  }
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


// Tests ------------------------
let order = new Order("Leia Organa");
let drinkOrder = new DrinkOrder(5);
// let drinkOrder2 = new DrinkOrder(1);
let breadSticksOrder = new BreadSticksOrder(1); 
order.addItem(drinkOrder);
order.addItem(breadSticksOrder);
console.log(order.calculateTotal());
console.log(order.thankCustomer());
// Expected output: 15. Actual output: 15. TEST PASSED!!!

class menuItem {
  constructor(itemName, smallPrice, mediumPrice, largePrice, addOnPrice) {
    this.itemName = itemName;
    this.smallPrice = smallPrice;
    this.mediumPrice = mediumPrice;
    this.largePrice = largePrice;
    this.addOnPrice = addOnPrice;
  }
  calculateTotal() {
    if 
  }
  returnTotal() {

  }

}

class Pizza extends menuItem {
  constructor(itemName, smallPrice, mediumPrice, largePrice, addOnPrice, size, toppings=[]) {
    super(itemName, smallPrice, mediumPrice, largePrice, addOnPrice);
    this.size = size;
    this.toppings = topings;
  }
}

// EXAMPLE CODE BELOW

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
      super(first,last,age,gender, interests);
      
      this.subject = subject;
      this.grade = grade;
  }
}

let snape = new Teacher("Severus", "Snape", 58, "douche", "Potions", "Dark Arts", 5);
