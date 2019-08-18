
// RIDDEN
//======
const addFormRidden = document.querySelector('.addFormRidden');
const riddenList = document.querySelector('.ridden');
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

// wishlist
//======
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
    

    // console.log(todo);
});

