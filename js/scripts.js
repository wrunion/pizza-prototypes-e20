// Business Logic --------------------

// function Pizza(customerName, size, toppings) {
//   this.customerName = customerName;
//   this.size = size;
//   this.toppings = toppings;
// }

// Pizza.prototype.price = function() {
//   // Create price variable
//   let price;

//   if (this.size === "small") {
//     price = 10;
//   } else if (this.size === "medium") {
//     price = 15;
//   } else if (this.size === "large") {
//     price = 20;
//   } else {
//     console.log("Error: invalid size input. Troubleshoot Pizza.prototype.price.");
//   }

  // Check if the user ordered extra toppings. If so, add $1 to the total for each topping ordered. Otherwise, skip.
//   if (this.toppings) {
//   let toppingPrice = this.toppings.length;
//   price += toppingPrice;
//   }

//   return price;
// }

// Test instances
// let testPizza = new Pizza("Chris", "large", ["Pepperoni", "Pineapple"]);
// let testPizza2 = new Pizza("Kara", "medium");

class Pizza {
  constructor(customerName, size, toppings=[]){
      this.name = customerName;
      this.size = size;
      this.toppings = toppings;
      this.price = 0;
  }
  totalPrice(){
      //Set base price of pizza based on size
      if (this.size === "small") { this.price += 10; }
      if (this.size === "medium") { this.price += 15; }
      if (this.size === "large") { this.price += 20; }
      console.log(`Your base price is ${this.price}.`);
      //Check to see if user ordered extra toppings. If so, charge them $1 extra per topping.
      if (this.toppings) { this.price += this.toppings.length; }
      console.log(`Your total is ${this.price}.`);
      return this.price;
  }
}

// UI Logic --------------------------
$(document).ready(function() {
  $("form").submit(function(event) {
    // Retrieve name, size, and toppings array from form: 
    let userName = $("#userName").val();
    let size = $("input:radio[name=size]:checked").val();
    let toppings = [];
    $.each($("input[name='topping']:checked"), function(){
        toppings.push($(this).val());
    });
    
    // Confirm the order with the user.
    if (toppings === 1) {
      confirm(`You would like a ${size} pizza with ${toppings.length} additional topping. Is that correct?`); 
    } else {
    confirm(`You would like a ${size} pizza with ${toppings.length} additional toppings. Is that correct?`);
    }
    // If customer confirms: 

    // Create a new instance of Pizza using that information

    let currentPizza = new Pizza(name, size, toppings);

    // Run the "price" method on our pizza instance
    let price = currentPizza.totalPrice();

    // Display that price total to the user
    confirm(`Your total is ${price}. Please press "OK" to submit your order`);
    // Thank the user for their order.
    alert(`Thanks for your order, ${userName}. It will be ready for pickup in 30 minutes or less.`);

    event.preventDefault();
  });

});