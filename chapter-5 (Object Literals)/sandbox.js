// Object Literals
// =================

// let user = {
//     firstName: 'Daniel',
//     lastName: 'Mintz',
//     age: 49,
//     location: 'Norbury',
//     blogs: ['ibikeride', 'html', 'go'],
//     login() {
//         console.log('the user logged in');

//     },
//     logout(){
//       console.log('the user logged out');
//     },
//     logBlogs(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs: ')
//         this.blogs.forEach(blog => {
//             // this.blogs.forEach(function(blog){ // alternative showing function

//             console.log(blog);
//         })
//     }

// };

// people.forEach(function(person, index){
    // //     console.log(index, person);
// it's all about declaring 'this' inside the object..



// user.logBlogs(); 
// // console.log(this);
// // console.log(this);


// console.log(user);
// console.log(user.firstName)

// user.age = 32;
// console.log(user.age)

// console.log(user)

// user['firstName'] = 'JAJA';
// console.log(user['firstName']);
// user.login();

// objects in arrays

// let user = {
//     firstName: 'Daniel',
//     lastName: 'Mintz',
//     age: 49,
//     location: 'Norbury',
    // blogs: ['ibikeride', 'html', 'go'],
    // instead of one array blogs becomes an object 
    // blogs: [
//         {title: 'ibikeride', likes: 30, author: 'stumpy dan'},
//         {title: 'html & css - my journey as a novice', likes: 30, author: 'daniel mintz'},
//         {title: 'Go - the beginner kicking off the hard first', likes: 5, author: 'daniel mintz'}
// ],
//     login() {
//         console.log('the user logged in');

//     },
//     logout(){
//       console.log('the user logged out');
//     },
//     logBlogs(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs: ')
//         this.blogs.forEach(blog => {
//             // this.blogs.forEach(function(blog){ // alternative showing function

//             console.log(blog.title, blog.likes, blog.author);
//         })
//     }

// };

// user.logBlogs()

// Math object
// =============

// console.log(Math);
// console.log(Math.PI);

// const area = 7.789

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //randon numbers
// // -------------
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

// Primitive and Reference Values
// ===============================
//(primitive stored on stack and reference on heap)

// Promitive values
// -----------------
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreone: ${scoreOne} scoretwo: ${scoreTwo}`);

scoreTwo = 100;
console.log(`scoreone: ${scoreOne} scoretwo: ${scoreTwo}`);

// NB 

// score one retains at 50 as on stack it has not been updated

// Reference Values;
//------------------

// only stored once on heap with a pointer on stack. So whenever updated once it is always updated for every valiable

// const userOne = {name: 'Daniel', age: 49};
// const userTwo = userOne;
// console.log(` UserOne: ${userOne.name} ${userOne.age} userTwo: ${userTwo.name} ${userTwo.age}`)
// console.log(userOne, userTwo)

// userOne.name = 'debra';
// console.log(userOne, userTwo);

// As stored on heap.. 

