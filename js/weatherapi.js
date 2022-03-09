const weatherApi = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={da06ec2c60e15d55813ec4b8ac326745}

const apiURL = "...";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });


  document.querySelector('#current-temp').textContent = jsObject.main.temp;


const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;