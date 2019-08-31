

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

   
});


// //delete trail from from ridden list

riddenList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
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
});


//delete trail from wish list 
  
wishList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
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
    
    //    wishlist search
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

