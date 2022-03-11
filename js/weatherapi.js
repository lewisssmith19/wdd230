// const weatherApi = `https://api.openweather.org/data/2.5/weather?id=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e18747771`; ---

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=da06ec2c60e15d55813ec4b8ac326745`;
fetch(apiURL)
  .then((response) => response.json())
  .then((x) => {
    const currentTemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector('#weathericon');
    const caption = document.querySelector('figcaption');

    currentTemp.textContent = x.list[0].main.temp.toFixed(0);
    let imgsrc = `https://openweathermap.org/img/w/${x.list[0].weather[0].icon}.png`;
    let imgalt = x.list[0].weather[0].description;
    imgalt = imgalt.split(' ').map(capitalize).join(' ');

    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);
    caption.innerHTML = imgalt;
  });

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
