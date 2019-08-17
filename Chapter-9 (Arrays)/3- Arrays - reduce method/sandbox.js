// ARRAYS - REDUCE METHOD
// ======================

// accumalator and current (e.g. adding up a players scores or number of reviews over 4.5)

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
    
//     if (curr > 50) {
//     acc++;
// }
// return acc;

// }, 0);

// console.log(result)
const scores =[
{name: 'mario', score: 30},
{name: 'Nomad', score: 50},
{name: 'mario', score: 60},
{name: 'Beast', score: 60},
{name: 'Facer', score: 70},
{name: 'Houzer', score: 50}
];

const marioTotal = scores.reduce((acc, curr) => {
if (curr.name === 'mario') {
    acc += curr.score;
}
return acc

}, 0);

console.log(marioTotal)