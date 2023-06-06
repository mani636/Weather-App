'use strict';

// API
const apiKey = '5c2c70f135f35dcb28e91a4a63106eb0';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

// Elements
const cityName = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// functions
async function weatherCheck(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

  if (data.weather[0].main == 'Clouds') {
    weatherIcon.src = 'images/clouds.png';
  } else if (data.weather[0].main == 'Clear') {
    weatherIcon.src = 'images/clear.png';
  } else if (data.weather[0].main == 'Rain') {
    weatherIcon.src = 'images/rain.png';
  } else if (data.weather[0].main == 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png';
  } else if (data.weather[0].main == 'Mist') {
    weatherIcon.src = 'images/mist.png';
  }
}

// add EventListener
btn.addEventListener('click', () => {
  weatherCheck(cityName.value);
});
