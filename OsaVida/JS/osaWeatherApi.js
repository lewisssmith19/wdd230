const apiURL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=8.5609&lon=83.4644&appid=da06ec2c60e15d55813ec4b8ac326745`;
fetch(apiURL2)
.then((response) => response.json())
.then((x) => {
const currentTemp = document.querySelector('#currentTemp');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption'); 
currentTemp.textContent = x.temp;
let imgsrc = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={da06ec2c60e15d55813ec4b8ac326745}`;
let imgalt = x.current.weather[0].description;
imgalt = imgalt.split(' ').map(capitalize).join(' ');

weathericon.setAttribute('src', imgsrc);
weathericon.setAttribute('alt', imgalt);
});

function capitalize(word) {
return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

const getJSON2 = async (url) => {
const response = await fetch(url);
return response.json();
};
getJSON2(
'https://api.openweathermap.org/data/2.5/onecall?lat=8.5609&lon=83.4644&appid=da06ec2c60e15d55813ec4b8ac326745'
).then((data) => displayWeather(data));

function displayWeather(data) {
let weatherString = data;
let weathericon = document.querySelector('#weathericon');
let currentTemp = document.querySelector('#currentTemp');
let weatherCondition = document.querySelector('#weatherCondition');
let weatherWindSpeed = document.querySelector('#weatherWindSpeed');
let weatherWindChill = document.querySelector('#weatherWindChill');
let temperature = weatherString.current.temp;
let speed = weatherString.current.wind_speed;
let windChill =
35.74 +
0.6215 * temperature -
35.75 * speed ** 0.16 +
0.4275 * temperature * speed ** 0.16;

let iconImageURL = `http://openweathermap.org/img/wn/10d@2x.png`;
weathericon.setAttribute('alt', 'Weather Icon showing weather conditions');
weathericon.src = iconImageURL;
currentTemp.textContent = `${Number(temperature).toFixed(0)} `;
// weatherCondition.textContent = weatherString.current.weather[0].main;
weatherWindSpeed.textContent = `Wind Speed: ${weatherString.current.wind_speed.toFixed(
1
)} mph`;
if (temperature <= 50 && speed > 3) {
weatherWindChill.textContent = `Wind Chill: ${windChill.toFixed(
0
)}\u00B0 F`;
} else {
weatherWindChill.textContent = 'Wind Chill: N/A';
}
}