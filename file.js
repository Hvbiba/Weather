// Get elements
const weatherDiv = document.querySelector('#container');
const cityInput = document.querySelector('#container input');
const weatherData = document.querySelector('#text h4');
const weatherIcon = document.querySelector('#icon img');
const Case = document.getElementById('Case');

// Get API key
const apiKey = 'aa2ed89a3424b3d026a361520a3863a8';

// Add event listener to the search button
     function cityFromUser() {
        const city = cityInput.value;
        if (city) {
            getWeatherData(city);
        }
    };

// Function to fetch weather data
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        updateWeatherData(data);
    } catch (error) {
        weatherData.innerHTML = `Error: ${error.message}`;
    }
}

// Function to update the DOM with weather data
function updateWeatherData(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    weatherData.innerHTML = `${cityName} <br>${temperature}<sup>o</sup> C`;
    // change icon based on weather Case
    // rain src  7e85bce4b25c3358f7bbc9c2029bd871-removebg-preview.png
    // sunny src c058eb7027e02f753c009e179c525eca-removebg-preview.png

    
    if(temperature >=30){
        Case.innerHTML='Sunny';
        console.log('sunny');
        weatherIcon.style.width='90px';
        weatherIcon.src='c058eb7027e02f753c009e179c525eca-removebg-preview.png';
    }
    if(temperature >=21 && temperature <30){
        Case.innerHTML='Clear';
        console.log('Clear');
        weatherIcon.style.width='90px';
        weatherIcon.src='c058eb7027e02f753c009e179c525eca-removebg-preview.png';
    }
    if(temperature <20){
        Case.innerHTML='Rainy';
        console.log('Rainy');
        weatherIcon.style.width='90px';
        weatherIcon.src='7e85bce4b25c3358f7bbc9c2029bd871-removebg-preview.png';
    }
}

