// CALLBACK FUNCTIONS
// ====================
//READ
//=======
// The fundamental reason for a callback is to run code in response to an event. ...

// To register a callback function for an event, you need to be able to pass it to another function, 
// which is responsible for binding the event and callback together 
// (i.e. make it so the callback executes, or runs, when the event occurs).
// CALLBACK EXAMPLE

// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);

//EXTEND PREVIOUS LECTURE USING A CALLBACK
// =======================================

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
  if(request.readyState === 4 && request.status === 200) {
 callback(undefined, request.responseText);
  } else if(request.readyState === 4) {
    callback('could not fetch data', undefined);
  }
  });
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
};

getTodos((err, data) => {
console.log('callback fired');
if(err){
  console.log(err);
} else {
  console.log(data);
}
});