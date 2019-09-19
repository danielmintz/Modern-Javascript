const list = document.querySelector('ul');

const addRecipe =(recipe) => {
    let time = recipe.created_at.toDate();
    let html = `
    <li>
    <div> ${recipe.title}</div>
    <div> ${time}</div>
    </li>
    `
    list.innerHTML +=html;
}


db.collection('recipes').get().then((snapshot) =>{
// when we have the data
// console.log(snapshot.docs[0].data());
snapshot.docs.forEach(doc => {
addRecipe(doc.data());
});

}).catch(err => {
    console.log(err);
});

