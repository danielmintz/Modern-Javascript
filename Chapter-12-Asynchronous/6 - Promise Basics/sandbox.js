// PROMISE BASICS (METHOD DONT NEED CALLBACK) -SEE EXAMPLE BELOW AT END
// reolve and reject and then and catch are set terms built in to the method
// =======================================

const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    //fetch data
      const request = new XMLHttpRequest();

      request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText); // CONVERTS TO JSON
    resolve(data)
      } else if(request.readyState === 4) {
        reject('error, getting resource');
      }
      });
      
      request.open('GET', resource);
      request.send();
    });
 
};

getTodos('luigi.json').then(data => {
console.log('promise resolved', data);
}).catch (err => {
console.log('promise rejected', err)
});

// getTodos('luigi.json', (err, data) => {
//   console.log(data);
//   getTodos('mario.json', (err, data) => {
//   console.log(data);
//   getTodos('shaun.json', (err, data) => {
//   console.log(data);
    
//     });
//   });
//   });

  
//EXAMPLE
//=========

// const getSomething =() => {

//   return new Promise((resolve, reject) => {
//     //fetch something;
//     resolve('some data');
//     reject('some error');
// });

// };

// getSomething().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

//long way to write

// getSomething().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// });