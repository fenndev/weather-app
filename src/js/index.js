import 'regenerator-runtime/runtime';

let searchForm = document.querySelector('#search-form');
let searchText = document.querySelector("#search-bar");
let searchButton = document.querySelector("#search");

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchText.value == '' ? getWeatherData() : getWeatherData(searchText.value);
    searchText.value = '';
})

async function getWeatherData(location = 'seattle') {
    try {
        let data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location.toLowerCase()}&limit=1&appid=53eb90610b23be70589bc3e845c27b5a`, {
            mode: "cors",
        });
        let processedData = await data.json();
        let lat = processedData[0].lat;
        let lon = processedData[0].lon;
        let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=53eb90610b23be70589bc3e845c27b5a&units=imperial`, {
            mode: "cors",
        });
        let processedWeatherData = await weatherData.json();
        console.log(processedWeatherData);
        let weather = processedWeatherData.main;
        console.log(`${weather.temp} degrees Fahrenheit`);

    }
    catch {
        console.error("Something went wrong.");
    }
    
}