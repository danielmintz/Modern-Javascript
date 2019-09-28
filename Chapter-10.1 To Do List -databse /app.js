// RIDDEN
//======
const addFormRidden = document.querySelector('.addFormRidden');
const riddenList = document.querySelector('.ridden');

//functions for updating rides deleted and added to UI

const addRidden = ((ride, id) => {
    let time = ride.created_at.toDate()
    let html = `
    <li data-id="${id}">
    <span>${ride.trail}</span><svg class="delete"><use xlink:href="/symbols/icons.svg#trash"></use></svg></li>`;
    riddenList.innerHTML += html;
    
});

const deleteRidden = (id) => {
    const ridden = document.querySelectorAll('li');
    ridden.forEach(ride => {
        if (ride.getAttribute('data-id') === id)
        ride.remove();
    })
    }
    
/// Rel time listener for retrieving databses and updating ui
db.collection('ridden').onSnapshot(snapshot =>{
    console.log(snapshot)
snapshot.docChanges().forEach(change => {
    console.log(change);
    const doc = change.doc;
    if(change.type ==='added') {
        addRidden(doc.data(), doc.id);
    } 
    else if (change.type === 'removed'){
        deleteRidden(doc.id);
    }
})
});

//// adding rides from database

addFormRidden.addEventListener ('submit', e => {
    e.preventDefault();

    const now = new Date();
    const ride = {
        trail: addFormRidden.add.value.trim(),
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    db.collection('ridden').add(ride).then(() => {
        console.log('ridden trail added');
           }).catch ((err)=> {
               console.log(err);
           });
          console.log()
    
    addFormRidden.reset(); 

});



// delete trail from database

riddenList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('ridden').doc(id).delete().then(() =>{
            console.log('ride deleted');
        });
        
    };
  });




//reminder on setting local storage

//localStorage.setItem('riddenList', riddenList.innerHTML)

//===================================================
// const list = document.querySelector('ul'); 
// const form = document.querySelector('form');
// const button = document.querySelector('button');



// addRecipes = ((recipe, id) => {
//     let time = recipe.created_at.toDate()
//     let html = `
// <li data-id="${id}">
// <div>${recipe.title}</div>
// <div>${time}</div>
// <button class="btn">delete</button>

// </li>
// `
// list.innerHTML += html;
// })

// const deleteRecipes = (id) => {
// const recipes = document.querySelectorAll('li');
// recipes.forEach(recipe => {
//     if (recipe.getAttribute('data-id') === id)
//     recipe.remove();
// })
// }

// // Rel time listener for retrieving databses and updating un
//     db.collection('recipes').onSnapshot(snapshot =>{
//     // console.log(snapshot)
// snapshot.docChanges().forEach(change => {
//     // console.log(change);
//     const doc = change.doc;
//     if(change.type ==='added') {
//         addRecipes(doc.data(), doc.id);
//     } else if (change.type === 'removed'){
//         deleteRecipes(doc.id);
//     }
// })
// });

// // adding documents
// form.addEventListener('submit', e => {
//     e.preventDefault();

//     const now = new Date();
//     const recipe = {
//         title: form.recipe.value,
//         created_at: firebase.firestore.Timestamp.fromDate(now)
//     }

// db.collection('recipes').add(recipe).then(() => {
// console.log('recipe added');
//    }).catch ((err)=> {
//        console.log(err);
//    });
  
// })

// //deleting data form database
// list.addEventListener('click', e => {
//     //console.log(e);
//     if (e.target.tagName === 'BUTTON'){
//         const id = e.target.parentElement.getAttribute('data-id');
//         db.collection('recipes').doc(id).delete().then(() =>{
//             console.log('recipe deleted');
//         });
//     }
// })


