const list = document.querySelector('ul'); 
const form = document.querySelector('form');
const button = document.querySelector('button');



addRecipes = ((recipe, id) => {
    let time = recipe.created_at.toDate()
    let html = `
<li data-id="${id}">
<div>${recipe.title}</div>
<div>${time}</div>
<button class="btn">delete</button>

</li>
`
list.innerHTML += html;
})

const deleteRecipes = (id) => {
const recipes = document.querySelectorAll('li');
recipes.forEach(recipe => {
    if (recipe.getAttribute('data-id') === id)
    recipe.remove();
})
}

// Rel time listener for retrieving databses and updating un
const unsub = db.collection('recipes').onSnapshot(snapshot =>{
   // use below instead of abive when not using unsubscribe 
    //db.collection('recipes').onSnapshot(snapshot =>{
    // console.log(snapshot)
snapshot.docChanges().forEach(change => {
    // console.log(change);
    const doc = change.doc;
    if(change.type ==='added') {
        addRecipes(doc.data(), doc.id);
    } else if (change.type === 'removed'){
        deleteRecipes(doc.id);
    }
})
});


//Retrieving recipes from database
//=================================
// db.collection('recipes').get().then((snapshot) => {
//     // console.log(snapshot.docs[0].data());
//     snapshot.docs.forEach((doc) => {
//         console.log(doc.data())
//         console.log(doc.id);
//         addRecipes(doc.data(), doc.id);
//     })
// }).catch ((err) => {
// console.log(err)
// })

// adding documents
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }

db.collection('recipes').add(recipe).then(() => {
console.log('recipe added');
   }).catch ((err)=> {
       console.log(err);
   });
  
})

//deleting data form database
list.addEventListener('click', e => {
    //console.log(e);
    if (e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() =>{
            console.log('recipe deleted');
        });
    }
})

//unsub from databse changes

button.addEventListener('click', () =>{
    unsub();
    console.log('unsubscribed from changes')
});





























// const list = document.querySelector('ul');

// const addRecipe =(recipe) => {
//     let time = recipe.created_at.toDate();
//     let html = `
//     <li>
//     <div> ${recipe.title}</div>
//     <div> ${time}</div>
//     </li>
//     `
//     list.innerHTML +=html;
// }


// db.collection('recipes').get().then((snapshot) =>{
// // when we have the data
// // console.log(snapshot.docs[0].data());
// snapshot.docs.forEach(doc => {
//     console.log(doc.data());
// addRecipe(doc.data());
// });

// }).catch(err => {
//     console.log(err);
// });

