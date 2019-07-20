//functions
// ===============
// speak() // wont work up here as above the function expression.

//expressions (when a variable drives a fuction so variable is fucntion name)
//--------------
// nb: need to be at the top or won't run.console. Best practice use these

// const speak = function(){
//     console.log('time to speak up folks');
// }; //nb needs dotted comma to close the expression

// //examples of calling functions
// greet()
// greet()

// speak()
// speak()


// // function declarations (when fucntion has it's own name)
// //----------------------
// // NB can be anywhere in the page as hoisted to the top in background.. 
// // not best practise will use less.

// function greet() {
//     console.log('greetings humans');
// }

// arguments and parameters
// ===========================

// const speak = function(name , time) { // the name is the parameter // Luigi and night are defaults
//     console.log(`good ${time} ${name}`);
// };

// speak('Daniel', 'morning') // this is the argument. We are passing a value into the function above 


// // arguments and parmeters with defaults
// //----------------------------------------
// const speak = function(name = 'Luigi', time = 'night') { // the name is the parameter // Luigi and night are defaults
//     console.log(`good ${time} ${name}`);
// };

// speak('Daniel', 'morning') // this is the argument. We are passing a value into the function above 

// returning values
// ===================

// const calArea = function(radius) {
//     return area = 3.14 * radius**2;
// };

// calArea(5)

// console.log(area)

// const avgRating = function(total, number) {
//     return total / number;
// }

// const score = avgRating(100, 20);

// console.log(`the average score is ${score}`);


// // can use output to put into another function..

// const calcVol = function(score) {
//     return 10 * score;

// };

// const total = calcVol(score);
// console.log(`big number at the end is ${total}`);


// Arrow Function
// ==============

// Regular function:

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };

//Convert above to Arrow Function:
// 1) no need for function wording 

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// 2) no need for brackets when there is only one expression

// const calcArea = radius => {
//     return 3.14 * radius **2;
// };

// 3) no need to have curly brackers or retunr keyword even
 
// const calcArea = radius => 3.14 * radius **2;


// // argument
// const total = calcArea(5);
// console.log(total)

// Practise arrow functions
// ========================

// Example 1:
// const greet = function() {
//     return ('hello world')
// }

// const greet = () => ('hello world');
// const result = greet();
// console.log(result);

// Example 2:

// normal function to covert to arrow function"

// const bill = function(products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i]+products[i] * tax;
//     }
//     return total;
// }
// converted to arrow function:

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i]+products[i] * tax;
//     } return total;
// }

// // console.log(bill([10,15,30], 0.2))
// const score = bill([10,15,30], 0.2);
// console.log('the total bill is £',score);


// Callback functions
// ===================

//  passing in another function to a function or method as an argument

// Example 1:

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value)
// };

// myFunc (value =>{
//     console.log(value);
// });


// Example 2:

// let people = ['mario', 'luigi', 'dan', 'debra', 'joao', 'chun-li'];
// // people.forEach(function(person, index){
// //     console.log(index, person);
// // });

// // people.forEach ((person, index) => {
// //     console.log(index, person);
// // });
//-------------------

// const logPerson = (person,index) => {
//     console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);

// Examples: callbacks in action
// ================================
// get a reference to the 'ul'

// const ul = document.querySelector('.people');

// const people = ['mario', 'Daniel', 'Debra', 'Marni', 'joe'];
// let html =``;

// people.forEach (person => {
//     html += `<li style="color: purple">${person}</li>`;

// });
// console.log(html)

// ul.innerHTML = html;

//--------------------------------------------------
// const ul = document.querySelector('.people');

// const people = ['mario', 'Daniel', 'Debra', 'Marni', 'joe'];
// let html =``;


// const logPerson = person => {
//     html += `<li style="color: purple">${person}</li>`;

// };

// people.forEach(logPerson);

// console.log(html)

// ul.innerHTML = html;

