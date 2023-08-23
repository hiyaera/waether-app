
const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weatherImage');
const temprature = document.querySelector('.temp');
const description = document.querySelector('.descrip');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "2bceff596d2d5b58a51ec78fdb161647";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then
        (response => response.json());
    console.log(weather_data);
    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "waether app/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "waether app/sun.png";
            break;
        case 'Rain':
            weather_img.src = "waether app/heavy-rain.png";
            break;
        case 'Mist':
            weather_img.src = "waether app/mist (1).png";
            break;
        case 'Snow':
            weather_img.src = "waether app/snowflake.png";
            break;

    }
}



searchbtn.addEventListener('click', () => {
    checkWeather(inputBox.value);

}); 