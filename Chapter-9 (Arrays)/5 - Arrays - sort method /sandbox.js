// ARRAYS - SORT and REVERSE METHOD NB IS DESTRUCTIVE - changes original array so no need for new consrtant
// ======================

// sorting strings
const names = ['mario', 'debra', 'chun-li', 'yoshi', 'josef'];
console.log(names);
names.sort();
console.log(names);
names.reverse();
console.log(names);
// sorting numbers
const scores = [10, 0, 40, 60, 10, 20, 6, 30, 60];

// scores.sort(); // works badly as only used first digit..
// so 40 ends up being lower than 5
// PROPER WAY TO SORT: Using Compare function b-a 
scores.sort((a, b) => {
    return b - a;
});

console.log(scores);

// scores.reverse();
// console.log(scores);
//sorting objects

const players =[
    {name: 'mario', score: 30},
    {name: 'Nomad', score: 50},
    {name: 'mario', score: 60},
    {name: 'Beast', score: 60},
    {name: 'Facer', score: 70},
    {name: 'Houzer', score: 40},
    ];

// long methos or ordering objects
// ===============================
// players.sort((a,b) => {
//     if (a.score > b.score) {
//         return -1;
//     } else if (b.score > a.score) {
//         return 1;
//     } else {
//         return 0
//     };
// });
//short method of ordering objects using compare method
//=============================
players.sort((a,b) => {
    return b.score - a.score
});

// small option
// ==============
    
// players.sort((a,b) => b.score - a.score
// );
console.log(players)