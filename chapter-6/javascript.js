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

const paras = document.querySelectorAll('p');
paras.forEach(para => {
if (para.textContent.includes('error')){
    para.classList.add('error')
} if (para.innerText.includes('success')){
    para.classList.add('success')
}
});

const title =document.querySelector('.title');
title.classList.toggle('toggle-test');
// title.classList.toggle('toggle-test');

