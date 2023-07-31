const apiKey = "82005d27a116c2880c8f0fcb866998a0";

function displayWeatherData(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Description: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function onSearchButtonClick() {
  const searchInput = document.getElementById('searchInput');
  const city = searchInput.value.trim();

  if (city.length === 0) {
    alert('Please enter a city name.');
    return;
  }

  getWeatherData(city);
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', onSearchButtonClick);
