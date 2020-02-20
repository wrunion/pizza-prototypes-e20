// Business Logic ----------------------------
class Pizza {
  constructor(customerName, size, toppings=[]){
      this.name = customerName;
      this.size = size;
      this.toppings = toppings;
      //NOTE: Should I have price as a property that is a function? Or as a separate method, like below?
      // this.price = function() {
      //   let total = 0;
      //   //Set base price of pizza based on size
      //   if (this.size === "small") { total += 10; }
      //   if (this.size === "medium") { total += 15; }
      //   if (this.size === "large") { total += 20; }
      //   //Check to see if user ordered extra toppings. If so, charge them $1 extra per topping.
      //   if (this.toppings) { total += this.toppings.length; }
      //   return total;
      // }
  }
  getPrice() {
        let total = 0;
        //Set base price of pizza based on size
        if (this.size === "small") { total += 10; }
        if (this.size === "medium") { total += 15; }
        if (this.size === "large") { total += 20; }
        //Check to see if user ordered extra toppings. If so, charge them $1 extra per topping.
        if (this.toppings) { total += this.toppings.length; }
        return total;
      }
  confirmOrder() {
    if (this.toppings.length === 1) {
      return `You ordered a ${this.size} pizza with ${this.toppings.length} extra topping. Is that correct?`;
    } 
    return `You ordered a ${this.size} pizza with ${this.toppings.length} extra toppings. Is that correct?`;
  }    
  // displayOrder() {
  //   return [`Name: ${this.name}`, ]
  //   //return the customer's info in a nice, easy to display format
  // }
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
   confirm(pizza.confirmOrder());
  //  console.log(pizza.price());
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