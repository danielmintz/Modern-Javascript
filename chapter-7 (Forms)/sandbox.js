const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/;



form.addEventListener('submit', e =>{
e.preventDefault();
// console.log(form.username.value);

// validation

const username = form.username.value;
if (usernamePattern.test(username)) {
feedback.textContent = 'your usename is accepted!';
} else {
    feedback.textContent = 'your username is not accepted please use only letters between 6 - 12 characters';
}
});

// Live Testing

form.username.addEventListener('keyup', e => {
    // e.preventDefault();
   // console.log(e.target.value, form.username.value); // 2 ways fo doing the same thing
   if (usernamePattern.test(e.target.value)){
       form.username.setAttribute('class', 'success');
   } else {
       form.username.setAttribute('class', 'error');
   }

});





// Testing RegEx (Regular Expressions)
// ======================================
// const username = 'Israel2010!';
// const pattern = /^[a-zA-Z0-9!@£$%^&*]{6,14}$/;

// let result = pattern.test(username);
// // console.log(result)

// if(result){
//     console.log('regex test passed');
// } else {
//     console.log('reGex text failed');
// };

// let result = username.search(pattern); // gives minus if not matched and position if matched of where matched