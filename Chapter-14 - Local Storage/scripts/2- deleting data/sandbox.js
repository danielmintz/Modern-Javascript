// store data in local storage
// ==========================

localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

// get data from local sorage
// ===========================

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

//deleting data (one key and value)
//================================

localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name);

//deleting all data
//================
localStorage.clear();
age = localStorage.getItem('age');
name = localStorage.getItem('name');
console.log(name, age);







