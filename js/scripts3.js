// Business Logic ----------------------------

class MenuItem {
  constructor(size, toppings = []) {
    this.size = size;
    this.toppings = toppings;
  }
  displayItem() {
    return {
      "Size" : this.size,
      "Toppings" : [...this.toppings]
    }
  }
}

class Order {
  constructor(customerName) {
    this.customerName = customerName;
    this.items = [];
    }
  totalCost() {
    let total = 0;
    this.items.forEach(item) {
      total += item.price();
     }
    }
    displayOrder() {
      // Should this be here??? Or should it be elsewhere, bc it's user facing???
    }
    addItem(item) {
      this.items.push(item);
    }
}



class Pizza {
  constructor(size, toppings=[]){
      this.size = size;
      this.toppings = toppings;
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
  displayPizza() {
    return ``;
  }    
  addToOrder() {
    customerOrder.push(this);
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

    let pizza = new Pizza(name, size, toppings);
    console.log(pizza);
    console.log(pizza.getPrice());
    pizza.
    
    event.preventDefault();
  });
});