const cityForm = document.querySelector('.changeLocation');


const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // returns an object
    return {
        cityDets: cityDets,
        weather: weather
    };
};


// capture city submitted on search bar

cityForm.addEventListener('submit', e => {
    //prevent page reloading
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with the new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
});


// my version - cleaner and better
//================================

// cityForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const city = cityForm.city.value.trim().toLowerCase();
//     getCity(city)
//     .then(data => {
//         return getWeather(data.Key);
//     }).then (data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));
//     cityForm.reset();


// })


