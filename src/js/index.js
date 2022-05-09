import 'regenerator-runtime/runtime';
import getWeatherData from './weather.js';

const App = (() => {
    function initialize() {
        DOMManager.DOMSetup();
        DOMManager.getSearchForm().addEventListener('submit', (event) => {
            event.preventDefault();
            fetchWeatherData();
        });
    }

    function fetchWeatherData() {
        getWeatherData(DOMManager.getSearchText());
    }

    function displayWeather() {
        
    }

    return {initialize}
})();

const DOMManager = (() => {
    let searchForm;
    let searchText;

    function DOMSetup() {
        searchForm = document.querySelector('#search-form');
        searchText = document.querySelector("#search-bar");
    };

    const getSearchForm = () => searchForm;
    const getSearchText = () => searchText;

    return {getSearchForm, getSearchText, DOMSetup}
})();

const Main = (() => {
    App.initialize();
})();