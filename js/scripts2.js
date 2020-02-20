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


// ALTERNATE WAY? 

// class Pizza {
//   constructor(customerName, size, toppings=[]){
//       this.name = customerName;
//       this.size = size;
//       this.toppings = toppings;
// //         this.price = 0;
//   }
//   getPrice(){
//       //Set base price of pizza based on size
//       let price = 0;
//       if (this.size === "small") { price += 10; }
//       if (this.size === "medium") { price += 15; }
//       if (this.size === "large") { price += 20; }
//       console.log(`Your base price is $${this.price}.`);
//       //Check to see if user ordered extra toppings. If so, charge them $1 extra per topping.
//       if (this.toppings) { price += this.toppings.length; }
//       console.log(`Your total is $${this.price}.`);
//       return price;
//   }
// }



// Business Logic: Old Way --------------------

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
