// Clock


const now = new Date();

console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'MMMM'))
console.log(dateFns.format(now, 'dddd'))
console.log(dateFns.format(now, 'Do'))
console.log(dateFns.format(now, 'dddd, Do MMM YYYY'))

// COMPARING DATES - Great for BLOGS

const before = new Date ('July 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

// console.log(dateFns.isToday(now));

// const clock = document.querySelector('.clock');


// const tick =() => {
// const now = (new Date());

// const h = now.getHours();
// const m = now.getMinutes();
// const s = now.getSeconds();

// const html = `
// <span>${h} : </span>
// <span>${m} : </span>
// <span>${s} : </span>
// `

// clock.innerHTML = html
// };

// setInterval(tick, 1000);

// const clock = document.querySelector('.clock');

// const tick =() => {
//     const now = (new Date());
//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();
//     // console.log(h, m, s);
//     const html = `
//     <span>${h} : </span>
//     <span>${m} : </span>
//     <span>${s}</span> `;

//     clock.innerHTML = html;
// };

// setInterval(tick, 1000);