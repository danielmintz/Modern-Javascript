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
results.querySelector('span').textContent = `${score}%`;
// results.classList.remove('results');

// remove( String [, String [, ...]] )
results.setAttribute('class', 'results-show')



});




































// const correctAnswers = ['B', 'B', 'B', 'B'];
// const form = document.querySelector('.quiz-form')

// form.addEventListener('submit', e =>{
//     e.preventDefault();
// let score = 0;
// const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q2.value];

// userAnswers.forEach((answer, index) => {
// if (answer === correctAnswers[index]) {
//     score += 25;
// }
// });
// console.log(score)
// })