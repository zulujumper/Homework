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

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} pizza with `
  for (let topping of toppings) {
    order += `${topping}, `
  }
    console.log(`${order}coming up!`);
    return `${size}, ${crust}, ${toppings}`;
};

function preparePizza([size, crust, toppings]) {
    console.log("...your pizza is cooking...");
    let pizzaObj = {
      size: "ginormous",
      crust: "thin",
      toppings: "chicken, bacon, spinach, artichoke"
    };
    return pizzaObj;
}

function servePizza(pizzaObj) {
  console.log(`Pizza is ready, one ${pizzaObj['size']} ${pizzaObj['crust']} pizza with ${pizzaObj['toppings']}... Enjoy!`)
  return pizzaObj;
}

greetCustomer();
servePizza(preparePizza(getPizzaOrder()));
