//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // API key from https://openweathermap.org/appid
    const apiKey = "4459893b02b7ae5b8afdaad3a20bef11"; // Replace with your actual API key

    // DOM elements
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const weatherDataDiv = document.getElementById("weatherData");

    getWeatherBtn.addEventListener("click", function () {
        // Call the function to get weather data
        getWeatherData();
    });

    function getWeatherData() {
        // API endpoint for London
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + apiKey;

        // Make an HTTP GET request
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Update the weatherDataDiv with the retrieved data
                const weatherDescription = data.weather[0].description;
                const cityName = data.name;
                const weatherText = `Current weather in ${cityName}: ${weatherDescription}`;
                weatherDataDiv.textContent = weatherText;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error.message);
                weatherDataDiv.textContent = "Failed to fetch weather data.";
            });
    }
});