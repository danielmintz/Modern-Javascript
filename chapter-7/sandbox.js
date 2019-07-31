const form = document.querySelector('.signup-form');


form.addEventListener('submit', e =>{
e.preventDefault();
console.log(form.username.value);
});

// Testing RegEx (Regular Expressions)
// ======================================
const username = 'Israel2010!';
const pattern = /^[a-zA-Z0-9!@£$%^&*]{6,14}$/;

let result = pattern.test(username);
// console.log(result)

if(result){
    console.log('regex test passed');
} else {
    console.log('reGex text failed');
};

// let result = username.search(pattern); // gives minus if not matched and position if matched of where matched