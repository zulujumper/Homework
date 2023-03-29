const pizzaPlace = "DrewP's Pie Place";
const numberOfToppings = 47;

// console.log(pizzaPlace);
// console.log(typeof pizzaPlace);
// console.log(numberOfToppings);
// console.log(typeof numberOfToppings);

console.log(
  `Welcome to ${pizzaPlace} ${typeof pizzaPlace}, the home of the ${numberOfToppings} ${typeof numberOfToppings} topping pizza!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

for (let i = 0; i < numberOfToppings; i = i + 2) {
  console.log(i);
}
