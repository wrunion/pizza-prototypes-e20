// Business Logic --------------------

function Pizza(customerName, size, toppings) {
  this.customerName = customerName;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  // Create price variable
  let price;

  if (this.size === "small") {
    price = 10;
  } else if (this.size === "medium") {
    price = 15;
  } else if (this.size === "large") {
    price = 20;
  } else {
    console.log("Error: invalid size input. Troubleshoot Pizza.prototype.price.");
  }

  // Check if the user ordered extra toppings. If so, add $1 to the total for each topping ordered. Otherwise, skip.
  if (this.toppings) {
  let toppingPrice = this.toppings.length;
  price += toppingPrice;
  }

  return price;
}

// Test instances
// let testPizza = new Pizza("Chris", "large", ["Pepperoni", "Pineapple"]);
// let testPizza2 = new Pizza("Kara", "medium");

// UI Logic --------------------------
$(document).ready(function() {
  $("form").submit(function(event) {
  console.log('form is working');
  // 1. Retrieve name, size, and toppings array from form 
    // Name:
    let userName = $("")



  // 2. Create a new instance of Pizza using that information
  // 3. Run the "price" method on our pizza instance
  // 4. Display that price total to the user

    event.preventDefault();
  });

});