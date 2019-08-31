// CHAINING PROMISES
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
//Chaining Promises happens here below... 
getTodos('luigi.json').then(data => {
console.log('promise 1 resolved', data);
return getTodos('mario.json');
}).then(data => {
console.log('promise 2 resolved', data);
return getTodos('shaun.json');
}).then(data => {
 console.log('promise 3 resolved', data);
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