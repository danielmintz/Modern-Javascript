// THE FETCH API (MODERN WAY TO DO PROMISES
// =======================================



fetch('luigi.json').then((response) => {
  return response.json();
  }).then(data => {
    console.log('resolved', data);
  }).catch((err) =>{
  console.log('rejected', err);
  });


  // Maybe how you Chain (TBC)
  // fetch('luigi.json').then((response) => {
  //   return response.json();
  //   }).then(data => {
  //     console.log('resolved', data);
    
  //     return fetch('mario.json').then((response) =>{
  //     return response.json();
  //     }).then (data =>{
  //       console.log('resolved 2', data);
  //   }).catch((err) =>{
  //   console.log('rejected', err);
  //   });
    // });