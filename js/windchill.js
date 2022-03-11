// let temperature = 40;
// let wind_speed = 5;


// document.getElementById("wind_chill").innerHTML = (Math.round(wind_chill = 35.74 + 0.6215 * temperature - 35.75 * (Math.pow(wind_speed, .16)) + 0.4275 * temperature * (Math.pow(wind_speed, .16))))

const getJSON = async url => {
    const response = await fetch(url);
    return response.json(); 
};
getJSON("https://api.openweathermap.org/data/2.5/weather?lat=40.45749307996542&lon=-109.52854471895078&units=imperial&lang=en&appid=7896a0abdc6f34148aad2107b8c89750")
    .then(data => displayWeather(data));

function displayWeather(data) {
    let weatherString = data;
    let weatherIcon= document.querySelector('#weatherIcon');
    let weatherTemp= document.querySelector('#weatherTemp');
    let weatherCondition= document.querySelector('#weatherCondition');
    let weatherWindSpeed= document.querySelector('#weatherWindSpeed');
    let weatherWindChill= document.querySelector('#weatherWindChill');
    let temperature = weatherString.main.temp;
    let speed = weatherString.wind.speed;
    let windChill = 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + (0.4275 * temperature * (speed ** 0.16));
    let iconValue = weatherString.weather[0].icon;
    let iconImageURL =  `https://openweathermap.org/img/wn/${iconValue}@2x.png`;
    let iconImage = new Image();
    iconImage.setAttribute('alt', 'Weather Icon showing weather conditions');
    iconImage.src = iconImageURL;
    weatherIcon.appendChild(iconImage);
    weatherTemp.textContent = `${weatherString.main.temp.toFixed(0)}\u00B0 F`;
    weatherCondition.textContent = weatherString.weather[0].main;
    weatherWindSpeed.textContent = `Wind Speed: ${weatherString.wind.speed.toFixed(1)} mph`;
    if ((temperature <= 50)&&(speed > 3)) {
        weatherWindChill.textContent = `Wind Chill: ${windChill.toFixed(0)}\u00B0 F`;
    } else {
        weatherWindChill.textContent = 'Wind Chill: N/A';
    }
}