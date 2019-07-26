// const para = document.querySelector('p');
// console.log(para);

// const para = document.querySelector('div');
// console.log(para);

// const para = document.querySelector('.error');
// console.log(para);

// const para = document.querySelector('div.error');
// console.log(para);

// const para = document.querySelector('body>h1');
// console.log(para);

// const paras = document.querySelectorAll('p');
// paras.forEach(ask => {
//     console.log(ask)});

// const errors = document.querySelectorAll('.error');
// console.log(errors)
// errors.forEach(error => {
//     console.log(error)});


// Adding and Changing Page Content
// =================================

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = ': ninjas are awesome';
// para.innerText += ': ninjas are awesome';

// const paras =document.querySelectorAll('p');
// paras.forEach(para => {
//     // console.log(para.innerText);
//     para.innerText += ' yo iBikeriders';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);

// content.innerHTML += '<h2>this is a new h2 replacing previous html using innerHTML</h2>';

// const people = ['mario', 'Luigi', 'chun-li'];
// people.forEach(person=> {
//     content.innerHTML += `<p>${person}</p>`;

// });

// const link = document.querySelector('a');
// // console.log(link.getAttribute ('href'));

// link.setAttribute('href', 'https://iBikeride.com');
// link.innerText += ': iBikeRide - Home of Great Trails';

// const mssg = document.querySelector ('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color:green;');
// mssg.innerText = 'yo success it works';

// Changing CSS Style:
// =================
// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.fontSize = '60px';
// title.style.color = 'red';
// title.style.fontSize = '';

// Adding and removing Classes
// ===========================

// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
// if (para.textContent.includes('error')){
//     para.classList.add('error')
// } if (para.innerText.includes('success')){
//     para.classList.add('success')
// }
// });

// const title = document.querySelector('.title');
// title.classList.toggle('toggle-test');
// // title.classList.toggle('toggle-test');

// Parents, Children and siblings
// ===============================


// const title = document.querySelector('h2');
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// console.log(title.nextElementSibling.parentElement.children);
// const article = document.querySelector('article');
// console.log(article.children); // cant use foreach so nee dot ocnvert ot an array
// console.log(Array.from(article.children));
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element')
// });

// CLICK EVENTS
//==============================

// const buttonElement = document.querySelector('button');

// buttonElement.addEventListener ('click', ()=> {
//     console.log('you clicked me')
// alert('element clicked')
// });

// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// button.addEventListener ('click', ()=> {
//     // ul.innerHTML += '<li>New To Do</li>';
//     const li = document.createElement('li');
//     li.textContent = "A New To Do";
//     ul.prepend(li); // adds to top .. could be append for bottom

// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener ('click', e => {
// // console.log(e); 
// // console.log(e.target); // prefered
// // console.log(item); // option
// // e.target.textDecoration = 'line-through'; // option 1
// e.target.setAttribute('class', 'done'); // my prefered option 2
// // e.target.remove() 
// });
// });

// Event Bubbling 
// =============================
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// button.addEventListener ('click', ()=> {

//     const li = document.createElement('li');
//     li.textContent = "A New To Do";
//     ul.prepend(li); // adds to top .. could be append for bottom

// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener ('click', e => {
// e.target.setAttribute('class', 'done'); // my prefered option 2
// e.target.remove() 
// console.log('event in Li');
// e.stopPropagation(); // stops the BUBLLING UP of the event listlineing ot the element above the DOM
// });
// });

// ul.addEventListener('click', e => {
// console.log('event in ul');
// });

//Event Delegation (inc Bubbling)
//==================
const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener ('click', ()=> {

    const li = document.createElement('li');
    li.textContent = "A New To Do";
    ul.prepend(li); // adds to top .. could be append for bottom

});



ul.addEventListener('click', e => {
if (e.target.tagName === 'LI') {
    e.target.remove(); 
    e.stopPropagation();
}

});

// Other type of events (copy, mousemove, wheel)
// ----------------------------------------

const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    alert('hey this is copyright protected so hands off!');

});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e =>{
// console.log(e);
box.textContent = `position x - ${e.offsetX} position y - ${e.offsetY}`;
});

document.addEventListener('wheel', e =>{
console.log(e.pageX, e.pageY);
});

