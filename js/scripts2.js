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