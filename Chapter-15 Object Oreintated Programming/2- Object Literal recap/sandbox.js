// Object Literal Recap
// ======================
// When creating one or two objects then is fine but creating many different objects
//gets unmaintainable so there is an easier method

//SO CAN CREATE NEW OBJECTS FROM SCRATCH..




const userOne = {
    username: 'dan',
    email: 'daniel_mintz@yahoo.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
}

   
console.log(userOne.email, userOne.username);
userOne.login()


const userTwo = {
    username: 'debs',
    email: 'debra.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
}

console.log(userTwo.email, userTwo.username);
userTwo.login()