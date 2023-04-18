// Create an array of pizzaToppings with at least four different toppings

let pizzaToppings = ["pepperoni", "sausage", "cheese", "bacon"];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {
  let welcome = "Welcome to the Pizza House, our toppings are: ";

  for (let topping of pizzaToppings) {
    welcome += `${topping}, `;
  }
  console.log(welcome);
}
//Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} pizza with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  console.log(`${order}coming up!`);
  return [size, crust, toppings];
}

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([size, crust, toppings]) {
  console.log("...your pizza is cooking...");
  let pizzaObj = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaObj;
}

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizzaObj) {
  console.log(
    `Pizza is ready, one ${pizzaObj.size} ${pizzaObj.crust} pizza with ${pizzaObj.toppings}... Enjoy!`
  );
  return pizzaObj;
}

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input

greetCustomer();
servePizza(
  preparePizza(
    getPizzaOrder(
      "ginormous",
      "thin",
      "chicken",
      "bacon",
      "spinach",
      "artichoke"
    )
  )
);
