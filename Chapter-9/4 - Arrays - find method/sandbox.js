// ARRAYS - FIND METHOD
// ======================

const scores = [10, 5, 0, 40, 60, 10, 20, 30, 60];

const firstHighScore = scores.find((score) =>{
    return score > 30;

    //SIMPLIFIED:
// const firstHighScore = scores.find(score => score > 30);

console.log(firstHighScore)