const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const results = document.querySelector('.results');

form.addEventListener('submit', e =>{
    e.preventDefault();
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
let score = 0;
userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
        score += 25;
    };
});

// show results

scrollTo(0,0); // take you to the top of the page...x y coordinates
// results.innerText = 'yo success it works';
// results.classList.add('.results-show');
results.setAttribute('class', 'results-show')

let output = 0;
const timer = setInterval(() =>{
    results.querySelector('span').textContent = `${output}%`;
    if (output === score) {
        clearInterval(timer);
    } else {
        output++;
    };
}, 70);
});

// timer.. useful

// setTimeout(() => {
// alert('take that quiz')
// }, 5000);

// let i = 0;
// const timer = setInterval(() =>{
// console.log('hello');
// i++; 
// if (i === 5){
//     clearInterval(timer);
// }
// }, 2000);





























