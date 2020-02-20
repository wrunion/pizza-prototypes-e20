// Business Logic: Constructor Functions --------------------

function Pizza(customerName, size, toppings) {
  this.customerName = customerName;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  // Create price variable
  let price;
  // Set base price
  if (this.size === "small") {
    price = 10;
  } else if (this.size === "medium") {
    price = 15;
  } else if (this.size === "large") {
    price = 20;
  } 
  //Check if the user ordered extra toppings. If so, add $1 to the total for each topping ordered. Otherwise, skip.
  if (this.toppings) {
  let toppingPrice = this.toppings.length;
  price += toppingPrice;
  }

  return price;
}

Pizza.prototype.confirm = function() {
  return `Thank you for your order, ${this.name}. You chose a ${this.size} pizza with ${this.toppings.length} extra toppings. Your total cost is $${this.price()}.`;
}

//Test instances
let testPizza = new Pizza("Chris", "large", ["Pepperoni", "Pineapple"]);
let testPizza2 = new Pizza("Kara", "medium", ["Bell Peppers"]);

console.log(testPizza.price());
console.log(testPizza2.price());