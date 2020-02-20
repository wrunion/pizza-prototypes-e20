// Business Logic ----------------------------
class Pizza {
  constructor(customerName, size, toppings=[]){
      this.name = customerName;
      this.size = size;
      this.toppings = toppings;
      this.price = function() {
        let total = 0;
        if (this.size === "small") { total += 10; }
        if (this.size === "medium") { total += 15; }
        if (this.size === "large") { total += 20; }
        //Check to see if user ordered extra toppings. If so, charge them $1 extra per topping.
        if (this.toppings) { total += this.toppings.length; }
        return total;
      }
    }
}

// User-Facing Logic -----------------------
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
      console.log(pizza);
      console.log(pizza.price());

      // Display and confirm total price with user
      let submitOrder = confirm(`Your total is $${pizza.price()}. Press "okay" to submit your order or "cancel" to go back.`);

      if (submitOrder) {
      alert(thankCustomer(name));
    }

    }
    event.preventDefault();
  });
});