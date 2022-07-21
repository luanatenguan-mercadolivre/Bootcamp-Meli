let products = [
    {name: "Macbook", price: 1300, quantity: 40, colors:["silver", "black", "white"]},
    {name: "Iphone", price: 1000, quantity: 50, colors:["silver", "red", "white"]},
    {name: "Pendrive", price: 10, quantity: 10, colors:[]},
    {name: "Headset", price: 50, quantity: 0, colors:["black"]},
    {name: "Mouse", price: 20, quantity: 5, colors:["white", "black", "blue"]},
    {name: "Tablet", price: 500, quantity: 20, colors:["white", "black"]},
    {name: "USB adaptor", price: 5, quantity: 0, colors:[]},
    {name: "Keyboard", price: 30, quantity: 30, colors:["white"]},
    {name: "Tablet", price: 500, quantity: 20, colors:["white", "black"]},
    {name: "Gamepad", price: 30, quantity: 25, colors:["black", "silver"]},
    {name: "Tablet", price: 500, quantity: 20, colors:["white", "black"]},
    {name: "Monitor", price: 200, quantity: 3, colors:[]},
]

// Exercício 01: Adicione um ID exclusivo a cada produto começando com 1

for(let index = 0; index < products.length; index++){
    products[index].id = index +1;
}

console.log(products);

// Exercício 02: Imprima o nome de cada um dos produtos no console

products.forEach((product) => console.log(products.name));

// Exercício 03: Imprima no console o produto com o id 3

const product = products.filter((p) => p.id == 3);

console.log(product);

// Exercício 04: Imprima no console os produtos com a cor "black"

const blackProduct = products.filter((p) => p.colors.includes("black"));

// Exercício 05: Imprima no console os produtos que não possuem cor

const noColorProducts = products.filter((p) => p.colors.length == 0);