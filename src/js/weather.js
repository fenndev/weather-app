export default async function getWeatherData(location) {
    try {
        let geoData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location.toLowerCase()}&limit=1&appid=53eb90610b23be70589bc3e845c27b5a`, {
            mode: "cors",
        }).then(async function(response) {
            let location = await response.json();
            return location[0];
        });

        let rawWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=53eb90610b23be70589bc3e845c27b5a&units=imperial`, {
            mode: "cors",
        }).then(async function(response) {
            return response.json();
        });

        let weatherData = {
            cityName : rawWeatherData.name,
            weatherDesc : rawWeatherData.weather[0].description,
            temp : rawWeatherData.main.temp,
            maxTemp : rawWeatherData.main.temp_max,
            minTemp : rawWeatherData.main.temp_min,
            humidity : rawWeatherData.main.humidity,
            windSpeed : rawWeatherData.wind.speed,
            windDir : rawWeatherData.wind.deg,
        }
        
        return weatherData;
    }
    catch(error) {
        console.error(error);
    }
}