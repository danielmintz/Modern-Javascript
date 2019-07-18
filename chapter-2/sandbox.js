// Booleans and Comparisons
// ========================


// console.log(true, false, 'true', 'false');

// Methods can return booleans
// --------------------------

// let email = 'daniel_mintz@yahoo.co.uk'
// let result = email.includes('_');
// console.log(result);

// let names = ['mario', 'luigi', 'Dan'];
// let result = names.includes('luigi');

// console.log(result);

// result = names.includes('durren');
// console.log(result);


// Comparison operators
// ---------------------


let age = 25;

console.log(age == 25);
console.log(age != 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <=25);
console.log(age <= 25);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun'); // NB JS is case sensitive
console.log(name > 'crystal'); // Alphavet order means is s is greater than c'
console.log(name > 'Shaun'); // lower case is greater than Upper case
console.log(name > 'Crystal'); // any lower case is greater than any uppercase letter

//NB == means abstract equality where a values type is not considered. You can get more strict.. 


// Null and Undefined 
// ==================

// let age;
// console.log(age, age+3, `the age is ${age}`);

// age = null;
// console.log(age, age +3, `the age is ${age}`)


// Arrays
// ============

// let ninjas = ['shaun', 'ryu', 'Chun-li'];
// console.log(ninjas[1]);

// let ninjas = ['shaun', 'ryu', 'Chun-li'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [25,23,24,21,23];
// console.log(ages[2]);

// let random = [25, 45, 'ryu', 'ken'];
// console.log(random);

// console.log(random[3]);

// let ninjas = ['shaun', 'ryu', 'Chun-li'];
// console.log(ninjas.length)

// // Methods
// -----------
// let ninjas = ['shaun', 'ryu', 'Chun-li'];
// // let result = ninjas.join('- ');
// // let result = ninjas.indexOf('Chun-li');
// // let result = ninjas.concat('ken', 'crystal');

// let result = ninjas.push('ken'); // 

// // console.log(result); // returns value of array and is permanent (destructive methos)

// // console.log(ninjas) // returns array and is permanent

// result = ninjas.pop();//takes off last value i.e. Ken

// console.log(result) //shows last vlaue taken off i.e. ken

// console.log(ninjas); //shows full ninjas array exlcuding last value that pop took off

// Template Strings
// ===================

// const title = 'The Meaning of life';
// const author = 'Monty Python';
// const likes = 30;

// // concatenation Way
// ---------------------
// let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// Template String way
// ----------------------

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // // Creating html Templates
// // -------------------------

// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes<</span>
// `;
// console.log(html);



// numbers
// =================
//
// let radius = 10;
// const pi = 3.14;

// console.log (radius, pi);

// math operators +, -, *, / **, %
// -----------------------------------

// console.log(10/2);

// let result = radius %3;
// console.log(result);

// let result = pi * radius**2;

// console.log(result);

// order of operation B I D M A S (Brackets, Indexes, Divide, Multiply, Add subtract)

// let result = 5*(10-3)**2;

// console.log(result);

// let likes = 10;
// likes =likes +1;
// likes++
// likes--

// likes += 10;
// likes -=5;
// likes /= 5;
// likes *= 10;

// console.log(likes);

// NaN - not a number
// -------------------

// console.log (5/ 'hello');
// console.log (5 * 'heya');

// concatonation

// ---------------------

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);


// strings
// ======================
// console.log('Hello World');

// let email = 'daniel.mintz@yahoo.co.uk';
// console.log(email);


// string concatenation
// let firstName = 'Daniel';
// let lastName = 'Mintz';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// getting characters
// console.log(fullName[1]);

// string length
// console.log(fullName.length);

// string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// ------------------------------
// common strings

// let email = 'daniel.mintz@yahoo.co.uk';

// let result = email.lastIndexOf('o');

// let result = email.slice(0,3);

// let result = email.substr(4,10);

// let result = email.replace('d', 'f');

// let result = email.replace('n', 's');

// console.log(result);

// alert('This site uses technical and functional cookies in order to improve your experience and keep your session. By using this site you accept the use of cookies. Cookie policy Privacy policy');

// console.log(1);

// let age = 49;

// console.log(age);

// let year = 2019;

// console.log('age', age, 'todays', year);

// const dateOfbirth = 1970;

// console.log ('date of birth:', dateOfbirth);





