const cityForm = document.querySelector('.changeLocation');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructuring (shorter way for above)

    const { cityDets, weather } = data;

    console.log(data);

    // update 'details' template

    details.innerHTML =`
    <h5>${cityDets.EnglishName}</h5>
    <div>${weather.WeatherText}</div>
    <div>
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;

    //Update the icon images [set attribute!]

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

//Update the night and day images


// Using Tenary Operator (another way of doing if statements -if true do left value if false right value)
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);
    // doing  above using if statements
    // let timeSrc = null;
    // if(weather.IsDayTime){
    //   timeSrc = 'img/day.svg';
    // } else {
    //   timeSrc = 'img/night.svg';
    // }

    //time.setAttribute('src', timeSrc);


    // remove card class of display none

    if (card.classList.contains('card')) {
        card.classList.add('card-shown') 
    }
    };

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
   
    //returns an object
  //Object Shorthand Notation (if just use const then assumes title and data are the same)
  
  return {cityDets, weather};
    // long way
    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // };

   
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
        .then(data => updateUI(data))
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


