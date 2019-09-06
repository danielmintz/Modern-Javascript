// stringifying data (converting array into a JSON string and storing in local storage)
//=================================

const todos = [
    {text: 'Play Mariokart', author: 'shaun'},
    {text: 'Buy milk', author: 'dan'},
    {text: 'go biking', author: 'marni'}
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));
const stored = localStorage.getItem('todos');

//parsing data (opposite of above converting json string into something usable i.e. an array)
//==================================


console.log(JSON.parse(stored));



