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

/*
Exercício 01: Adicione um novo produto ao Array
com as mesmas propriedades dos produtos existentes 
*/

products.push({name: airpods, price: 1800, quantity: 9, colors:["white"]});

console.log(products);

// Exercício 02: Remova os produtos fora de estoque

for(let index = 0; index < products.length; index ++){
    if(products[index].quantity == 0){
        products.splice(index, 1);
    }
}

console.log(products);

// Exercício 03: Imprima no console a soma do estoque de todos os produtos

const sumProducts = products.map(e => e.quantity).reduce((add, sum) => add + sum, 0);

console.log(sumProducts);

// Exercício 04: Imprima produtos com preço superior a um determinado valor

const product = products.filter(p => p.price > 120);

console.log(product);

// Exercício 05: Imprima o nome de todos os produtos que tenham a letra "o" em seu nome

const productsWithO = products.filter((p) => e.name.includes('o'));

console.log(productsWithO)