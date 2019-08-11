// ARRAYS - FILTER METHOD
// ======================

const scores = [10,25,35,5,15,45];

const filteredScores = scores.filter((score) =>{
return score > 20;
});

console.log(scores);
console.log(filteredScores)

// Example for names and premium membership
// ===========================

const users = [
    {name: 'daniel', premium: true},
    {name: 'debra', premium: true},
    {name: 'Josef', premium: false},
    {name: 'Marni', premium: false}
];

const premiumUsers = users.filter((user) =>{
    return user.premium;
})

// Alternative more concise way

// const premiumUsers = users.filter(user => user.premium
// );

console.log(premiumUsers);