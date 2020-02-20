// Business Logic ----------------------------
class Pizza {
  constructor(customerName, size, toppings=[]){
      this.name = customerName;
      this.size = size;
      this.toppings = toppings;
      // ***QUESTION FOR MEGAN*** 
      // Is it better practice to have price as a property that is a function?
      // For example: 
          //this.price = function() {
            // (calculate and return price here);
          // }
      // Is that more effective? Or is it better to do it as a separate method, like I did below?
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
  submitOrder() {
    return `Your total is $${this.getPrice()}. Press "okay" to submit your order.`;
  }
  thankCustomer() {
    return `Thank you for your order, ${this.name}. Your pizza will be ready in 30 minutes or less.`;
  }
  // displayOrder() {
  //   //return the customer's info in a nice, easy to display format
  // }
}

// Function to display the customer's order back to them and ask for confirmation 
function confirmOrder(size, toppings=[]) {
  if (toppings.length === 1) {
    return `You would like a ${size} pizza with ${toppings.length} additional topping. Is that correct?`; 
  } else {
  return `You would like a ${size} pizza with ${toppings.length} additional toppings. Is that correct?`;
  }
}

function thankCustomer(customerName){
  return `Thank you for your order, ${customerName}! It will be ready for pickup in 30 minutes or less!`;
}

// UI Logic --------------------------
$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    let name = $("input#name").val();
    let size = $("input:radio[name=size]:checked").val();
    let toppings = [];
    $.each($("input[name='topping']:checked"), function(){
        toppings.push($(this).val());
    });
    //Confirm the order with the user
    let confirmSelections = confirm(confirmOrder(size, toppings));
    
    // Create a new instance of Pizza using that information
    if (confirmSelections) {
      let pizza = new Pizza(name, size, toppings);
      console.log(pizza);
      console.log(pizza.getPrice());
      // Display and confirm total price with user
      let submitOrder = confirm(`Your total is $${pizza.getPrice()}. Press "okay" to submit your order.`);

      if (submitOrder) {
      alert(thankCustomer(name));
    }

    }

 
    // Run the "price" method on our pizza instance


    // let price = currentPizza.totalPrice();

    // // Display that price total to the user
    // confirm(`Your total is $${price}. Please press "OK" to submit your order`);
    // // Thank the user for their order.
    // alert(`Thanks for your order, ${userName}. It will be ready for pickup in 30 minutes or less.`);




    // let pizza = new Pizza(name, size, toppings);
    // confirm(pizza.confirmOrder());
    // confirm(pizza.submitOrder());
    // alert(pizza.thankCustomer());

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