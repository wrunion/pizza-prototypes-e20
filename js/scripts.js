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
}

// These functions are separate instead of part of Pizza, because they're more user facing
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
    
    // Create a new instance of Pizza if user confirms
    if (confirmSelections) {
      let pizza = new Pizza(name, size, toppings);

      // Display and confirm total price with user
      let submitOrder = confirm(`Your total is $${pizza.getPrice()}. Press "okay" to submit your order or "cancel" to go back.`);

      if (submitOrder) {
      alert(thankCustomer(name));
    }
    
    }
    event.preventDefault();
  });
});