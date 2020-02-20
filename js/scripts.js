// Business Logic ----------------------------
class Pizza {
  constructor(customerName, size, toppings=[]){
      this.name = customerName;
      this.size = size;
      this.toppings = toppings;
      this.price = 0;
  }
  getPrice(){
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
  displayOrder() {
    //return the customer's info in a nice to display/read
  }
}

// UI Logic --------------------------
$(document).ready(function() {
  // console.log('jquery is working');
  $("form#orderForm").submit(function(event) {
    // console.log('form has been submitted');
    let name = $("input#name").val();
    let size = $("input:radio[name=size]:checked").val();
    let toppings = [];
    $.each($("input[name='topping']:checked"), function(){
        toppings.push($(this).val());
   });
    // console.log(toppings);
    // console.log(typeof toppings);
    // console.log(name);
    // console.log(size);
   let pizza = new Pizza(name, size, toppings);
   console.log(pizza);
   console.log(pizza.getPrice());
    // $("#results-div").append(name, size, toppings);
    event.preventDefault();
  });

});



// $(document).ready(function() {
//   $("form").submit(function(event) {
//     // Retrieve name, size, and toppings array from form: 
//     let userName = $("#userName").val();
//     console.log(userName);
//     console.log(typeof userName);
//     let size = $("input:radio[name=size]:checked").val();
//     console.log(size);
//     console.log(typeof size);
//     let toppings = [];
//     console.log(toppings);
//     console.log(typeof toppings);
//     $.each($("input[name='topping']:checked"), function(){
//         toppings.push($(this).val());
//     });
    
//     // Confirm the order with the user.
//     if (toppings === 1) {
//       confirm(`You would like a ${size} pizza with ${toppings.length} additional topping. Is that correct?`); 
//     } else {
//     confirm(`You would like a ${size} pizza with ${toppings.length} additional toppings. Is that correct?`);
//     }
//     // If customer confirms: 

//     // Create a new instance of Pizza using that information

//     let currentPizza = new Pizza(userName, size, toppings);
//     console.log(currentPizza);

//     // Run the "price" method on our pizza instance
//     let price = currentPizza.totalPrice();

//     // // Display that price total to the user
//     // confirm(`Your total is $${price}. Please press "OK" to submit your order`);
//     // // Thank the user for their order.
//     // alert(`Thanks for your order, ${userName}. It will be ready for pickup in 30 minutes or less.`);

//     event.preventDefault();
//   });

// });