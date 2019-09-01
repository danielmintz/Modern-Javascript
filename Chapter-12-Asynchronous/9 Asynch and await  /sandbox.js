// Async and Await
// =======================================


//Non chaining
// const getTodos =  async () => { //stil lreturns a promise

//   const responseLuigi = await fetch('luigi.json');
//   const dataLuigi = await responseLuigi.json();

//   return dataLuigi;
// };

// CHAINING
//=============================================
const getTodos =  async () => { 

    const responseLuigi = await fetch('luigi.json');
    
    if(responseLuigi.status !== 200) {
      throw new Error('cannot fetch the data');
    }

    const dataLuigi = await responseLuigi.json();
    

    return dataLuigi;
    
};

getTodos()
.then(dataLuigi => console.log('resolved:', dataLuigi))
.catch(err => console.log('rejected', err.message))
 


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