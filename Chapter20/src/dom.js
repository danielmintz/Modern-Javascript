console.log('dom file');

const body = document.querySelector('body');


const styleBody = () => {
body.style.background = 'orange';
};


const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

export { styleBody, addTitle}
// styleBody();
// addTitle('hello from the Dom file');

