// ARRAYS - chaining array method Example: take below and filter out anything that isn't over 20 in price then from that create a new array and map them so formated with a sale price (50%)
// ======================

// 1st The Long Way round not using the Chaining Array Method.
//========================


const products =[
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
    ];

   // Long way
   //========
    // const filtered = products.filter((product) => {
    //     if (product.price >20) 
    //     return product

    // });

    // Short way
    // =========
    // const filtered = products.filter((product) => product.price >20);

    // console.log(filtered)
   

    // const promos = filtered.map((product) => {
    //     return `the ${product.name} is now ${product.price /2} pounds`

    // });
    // console.log(promos);

    // 2nd The Chaining Array Method
//========================

const promos = products
    .filter(product => product.price >20)
    .map(product =>  `the ${product.name} is now ${product.price /2} pounds`)


    console.log(promos);