class Forecast {
    constructor(){
        this.key = '4ISa49lhTJQ23XTuQrAnQt6AmpJmNVFR';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
   
    return {cityDets, weather};
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`; // ? means adding on 
        const response = await fetch(this.cityURI + query)
        const data = await response.json();
    
        return data[0];
    }
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`; // ? is when it is a query perametor
        const response = await fetch(this.weatherURI+query);
        const data = await response.json();
        return data[0];
    }

}


