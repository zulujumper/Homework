let pizzaToppings = ["pepperoni", "sausage", "cheese", "bacon"]

function greetCustomer() {
  console.log("Welcome to the Pizza House, our toppings are:") 

  for (let topping of pizzaToppings) {
    return topping;
  }
}
// greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
    console.log(`One ${size} ${crust} pizza with ${[toppings]} coming up!`);
    return size, crust, [toppings];
}

let pizzaObj = {
        size: "large",
        crust: "thin",
        toppings: [
          "pepperoni",
          "sausage",
          "cheese",
          "bacon"  
        ]
    }
    
function preparePizza(size, crust, ...toppings) {
    console.log("...Cooking pizza...");
    
  for (pizza of pizzaObj) {
    return pizza;
  }
}

function servePizza(pizzaObj) {
    console.log(`Pizza is ready, one ${size} ${crust} pizza with ${[toppings]}. Enjoy!`)
    return pizzaObj;
}

preparePizza(size, crust, toppings);



