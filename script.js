const apiKey = "066954ed0ddfaa776abb9d12318510ef"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
    }else{
        
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = data.main.temp + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "weather_app / clouds-removebg-preview"
    }
    else if (data.weather[0].main == "Rain") {
          weatherIcon.src = " weather_app / images-removebg-preview"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "weather_app /mist-removebg-preview"
    } 
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = " weather_app / snow-removebg-preview"
    }

    document.querySelector('.weather').style.display = "block"
    document.querySelector('.error').style.display = "none"
    }

    
} 

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})

checkWeather()