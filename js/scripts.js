// Business Logic --------------------

class Order {
  constructor(customerName) { 
    this.customerName = customerName;
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  calculateTotal() {
    let total = 0;
    for (let i=0; i<this.items.length; i++) {
      let itemPrice = this.items[i].price;
      total += itemPrice;
    }
    return total;
  }
  thankCustomer() {
    return `Thank you for your order, ${this.customerName}! Your total is $${this.calculateTotal()}.`;
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
    /* Set base price of pizza based on size */
    if (this.size === "small") { total += 10; }
    if (this.size === "medium") { total += 15; }
    if (this.size === "large") { total += 20; }
    /* Check to see if user ordered extra toppings. If so, charge them $1 extra per topping. */
    if (this.toppings) { total += this.toppings.length; }
    total *= this.quantity;
    return total;
  }
}

/* Constructors for other menu items (To be implemented) */
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

let order;
let pizza;

// UI Logic --------------------------
$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    /* Gather user inputs */
    let name = $("input#name").val();
    let size = $("input:radio[name=size]:checked").val();
    let toppings = [];
      $.each($("input[name='topping']:checked"), function(){
        toppings.push($(this).val());
     });

    /* Create a new order and a new pizza. Push the pizza info to the order */
    order = new Order(name); 
    pizza =  new Pizza(size, toppings, 1);
    order.addItem(pizza);

    /* Retrieve & console.log order total */
    console.log(order.calculateTotal());
    
    /* Show the user their total, and thank them for their business! */
    alert(`${order.thankCustomer()} \n\n Your pizza will be ready for pickup in 20 minutes.`);
    event.preventDefault();
    });
  });