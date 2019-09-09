// super() adding properties to subclass
// ======================
// 

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

class Admin extends User {
    constructor (username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter((u) => { // users refers to array below and is creating a new filtered array and 'u'is the user pulled in when function called i.e. userTwo
            return u.username !== user.username
        })
    }

}
const userOne = new User('mario', 'mario.netninja.com');
const userTwo = new User('luigi', 'luigi@netninja.com');
const userThree = new Admin ('Dan', 'dan@aol.com', 'The best title ever', 50)
console.log(userOne, userTwo, userThree);


