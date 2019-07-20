// For Loops
// ============

// for (let i=0; i<5; i++){
//     console.log('for loop', i);
// }

// console.log('loop finished');

// const names =['daniel', 'marni', 'josef', 'debs'];
// for (let i=0; i<names.length; i++)
//  {
//     console.log(names[i]);
// }

// const names =['daniel', 'Marni', 'josef', 'debs'];
// for (let i=0; i<names.length; i++) {
//    let html =`<h1>The order of whatever is: ${names[i]}</h1>`;
//    console.log(html);
// }


// while Loops
// ==============

// let i = 0;
// while (i < 5) {
//     console.log('in loop ', i);
//     i++;
// }
// console.log('loop complete')

// const names = ['daniel', 'debra', 'josef', 'marni']
// let i = 0;
// while (i < names.length) {
//     console.log('in loop', names[i]);
//     i++;
// }
// console.log('log complete');


// do while loops
// ================

// let i = 2;
// do {console.log('loop', i);
// i++;
// }
// while (i < 5);

// If statements
// ==============

// const age = 25;

// if(age >20) {
//     console.log('you are old enough to enter')
// }

// const ninjas = ['shaun', 'mario', 'josef', 'joan'];
// if (ninjas.length >= 4) {
//     console.log("that's a lot of Ninjas");
// }

// else if statements
// ============================

// const password = 'password1235';

// if (password.length >= 12) {
//     console.log('that pasword is mighty strong');
// } else if (password.length >= 8) {
//     console.log('that password is just long enough');
// } else {
//     console.log('that password is too short, try again')
// }

// Logical Operators - Or || and AND &&
// ====================================

// const password = "password12346@";

// if (password.length >= 12 && password.includes('@')) {
//     console.log("that's a mighty strong password")
// } else if (password.length >=8 || password.includes('@') && password.length >= 4) {
//     console.log('that is a strong enough password')
// } else {
//     console.log('that password is not strong enough')
// }

// Logical NOT !
// ================

// let user = false;

// if (!user){
//     console.log('you must be logged in to continue')
// }

// console.log(true);
// console.log(false);

// console.log(!true);
// console.log(!false);

// break and continue
// ==================

// before break or continue
//---------------------------
// const score = [20, 30, 40, 10, 0, 100, 25, 45];

// for (i=0; i < score.length; i++){
//     console.log('your game score is: ', score[i])
// }

// break
// --------
// const score =[20, 30, 40, 10, 0, 100, 25, 45];
//  for (i=0; i < score.length; i++) {

//      console.log('your game score is ', score[i])
    

//      if (score[i] === 100){
//          console.log('awesome you hit the high score you win');
//          break;
//      }

//  }

 // continue
// ----------
// const score =[20, 30, 40, 10, 0, 100, 25, 45];
// for (i=0;i<score.length;i++) {
//     if (score[i] === 0) {
//         continue;
//     }
//     console.log('your game score is: ', score[i])

//     if (score[i] === 100) {
//         console.log('hey bud you reached the max score, you win!');
//         break;
//     }

// }

// switch statements
// ===================

// const grade = 'A';

// switch(grade) {
//     case 'A':
//         console.log('you got an A');
//         break;
//     case 'B':
//         console.log('you got a B');
//         break;
//     case 'C':
//         console.log('you got a C');
//         break;
//         case 'D':
//         console.log('you got a D');
//         break;
//         default:
//             console.log('That is not a valid grade');

// }

// Variables and block level scope
// ================================


// let age = 30; //group level affect local 

// if(true) {
//     let age = 20; // Local level just local but if used 'age = 20' then would be a change at group level alos the change 
//     let name = 'dan';
//     console.log('inside 1st code block' , age, name)
//     {
//         let age = 10; // local level again, always uses most recent 
//         console.log('inside 2nd code block' , age, name)
//         var text = 'name'
//     }
// }

// console.log('outside code block' , age, name, text)

// // let and const allow blaock levle scope, var doesn't. 
