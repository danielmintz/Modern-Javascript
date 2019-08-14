// ARRAYS - MAP METHOD
// ======================

const prices = [25,15,35,12,34,56,67];


// const salePrices = prices.map((price) =>{
// return price /2;
// })

// console.log(salePrices);

const products = [
    {name: 'Butcher', price: 200},
    {name: 'Nomad', price: 500},
    {name: 'Cruz', price: 300},
    {name: 'Beast', price: 600},
    {name: 'Facer', price: 700},
    {name: 'Houzer', price: 500}
];

const saleProducts = products.map((product) => {
    if(product.price >= 500) {
        return {name: product.name, price: product.price / 2};
    } else
    return product;
});

console.log(saleProducts);
console.log(products);