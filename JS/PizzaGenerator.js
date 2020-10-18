// Random pizza generator
// acceptance criteria: 
// 1. each pizza must have 1 type of base
// 2. Each pizza must have a sauce base
// 3. each pizza must have 3 different toppings

const baseArray = ['Deep pan', 'Thin crust', 'Stuffed crust']
const sauceBase = ['Tomato', 'BBQ', 'Parma']
const toppingArray = ['Spinach', 'Ricotta', 'Ham', 'Mushrooms', 'Chicken', 'Poop', 'Sweetcorn', 'Pepperoni']

// check that the value we want to add, is not already in the array

function selectToppings() {

let selectedToppings = []

while (selectedToppings.length <= 2) {
 let value = generateRandomNumber(toppingArray.length);
 const selectedTopping = toppingArray[value];
 
 if(!selectedToppings.includes(selectedTopping)){
      selectedToppings.push(selectedTopping)
 }

}

return selectedToppings

}

function generateRandomNumber(value) {
return Math.floor(Math.random() * value)
}


function selectBase() {

// Generate a random number between 0 - 2
const value = generateRandomNumber(3);

return baseArray[value]

} 

function selectSauce() {

// Generate a random number between 0 - 2
const value = generateRandomNumber(3);

return sauceBase[value]

} 



function generatePizza() {

const base = selectBase();
const sauce = selectSauce();
const toppings = selectToppings();

const pizza = {
  pizzaBase: base,
  pizzaSauce: sauce,
 pizzaToppings: toppings
}

return pizza
} 

function addValueToList(value) {
    var node = document.createElement("LI");                
 var textnode = document.createTextNode(value);        
 node.appendChild(textnode);                              
 document.getElementById("PizzaToppings").appendChild(node); 
}

function addPizzaToScreen() {
// Clear the list
document.getElementById("PizzaToppings").innerHTML = ""

const pizza = generatePizza();
                     
document.getElementById("PizzaBase").innerHTML = pizza.pizzaBase;
document.getElementById("PizzaSauce").innerHTML = pizza.pizzaSauce;

pizza.pizzaToppings.forEach(addValueToList)
}

// Listen to events
document.addEventListener('click', function (event) {

 if (event.target.matches('#generate-pizza')){
  addPizzaToScreen();
}

 // Append <li> to <ul> with id="myList"

}, false);


