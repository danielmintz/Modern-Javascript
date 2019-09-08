// Claa Constructors
// ======================
// 
//SO CAN CREATE NEW OBJECTS FROM SCRATCH..

class User {
    constructor(username, email){
// set up properties on the object
this.username = username;
this.email = email;
this.score = 0;

    }
    login() {
        console.log(`${this.username} just logged in`);
        return this; // need ot return a value or will be undefined when chainging as no value returned, 
    }
    logout() {
        console.log(`${this.username} just logged out`);
        return this; // need ot return a value or will be undefined when chainging as no value returned, 
    }
    inscore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }

}

const userOne = new User('mario', 'mario.netninja.com');
const userTwo = new User('luigi', 'luigi@netninja.com');
console.log(userOne, userTwo);

// Chaining
// ========
userOne.login().inscore().inscore().logout()



// the 'new keyword:
// 1) it creastes a new empty object {}
// 2) it binds the value of 'this' to the new empty object
// 3) it calls the constructor function to build the object

// NB each new User creates an instance of the user class..