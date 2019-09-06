

//RIDDEN
//======
const addFormRidden = document.querySelector('.addFormRidden');
const riddenList = document.querySelector('.ridden');
const search =document.querySelector('.search input');



const generateTemplate = (ridden) => {

    const html = `<li><span>${ridden}</span><svg class="delete"><use xlink:href="/symbols/icons.svg#trash"></use></svg></li>`;
    riddenList.innerHTML += html;
};

addFormRidden.addEventListener ('submit', e =>{
    e.preventDefault();
    const ridden = addFormRidden.add.value.trim();
    generateTemplate(ridden); 
    addFormRidden.reset();

    // adding update to local storage
    localStorage.setItem('riddenList', riddenList.innerHTML);
   
});

// //delete trail from from ridden list

riddenList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
        //deleting from local storage
        localStorage.setItem('riddenList', riddenList.innerHTML);
    };
  });
  
  
//wishlist
// ======
const addFormWish = document.querySelector('.addFormWish');
const wishList = document.querySelector('.wish');
const generateTemplateW = (wish) => {

    const html = `<li><span>${wish}</span><svg class="delete"><use xlink:href="/symbols/icons.svg#trash"></use></svg></li>`;
    wishList.innerHTML += html;
};

addFormWish.addEventListener ('submit', e =>{
    e.preventDefault();
    const wish = addFormWish.addW.value.trim();
    generateTemplateW(wish); 
    addFormWish.reset();

    // adding to local storage 
    localStorage.setItem('wishList', wishList.innerHTML);
});


//delete trail from wish list 
  
wishList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
         // deleting  to local storage 
       localStorage.setItem('wishList', wishList.innerHTML);
    };

});


//key up event search todo's
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
    })

const filterTodos = (term) => {

    // ridden search
    Array.from(riddenList.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) => {
            todo.classList.add('filtered')
        });

        Array.from(riddenList.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) => {
            todo.classList.remove('filtered')
        });
    
    //   wishlist search
    Array.from(wishList.children)
    .filter((todo) => {
        return !todo.textContent.toLowerCase().includes(term)
    })
    .forEach((todo) => {
        todo.classList.add('filtered')
    });

    Array.from(wishList.children)
    .filter((todo) => {
        return todo.textContent.toLowerCase().includes(term)
    })
    .forEach((todo) => {
        todo.classList.remove('filtered')
    });

};

// First check for local storage to update html

// Check for saved ridden list items and inject
let riddenSaved = localStorage.getItem('riddenList');

// If there are any saved items, update our list
if (riddenSaved) {
    riddenList.innerHTML = riddenSaved;
}


// Check for saved ridden list items and inject
let wishSaved = localStorage.getItem('wishList');

// If there are any saved items, update our list
if (wishSaved) {
    wishList.innerHTML = wishSaved;
}