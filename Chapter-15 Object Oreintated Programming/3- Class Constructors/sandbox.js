// Class Methods and Chaining
// ======================
// 
//SO CAN CREATE NEW OBJECTS FROM SCRATCH..

class User {
    constructor(username, email){
// set up properties on the object
this.username = username;
this.email = email;

    }

}

const userOne = new User('mario', 'mario.netninja.com');
const userTwo = new User('luigi', 'luigi@netninja.com');
console.log(userOne, userTwo);

// the 'new keyword:
// 1) it creastes a new empty object {}
// 2) it binds the value of 'this' to the new empty object
// 3) it calls the constructor function to build the object

// NB each new User creates an instance of the user class..