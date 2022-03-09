const weatherApi = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={da06ec2c60e15d55813ec4b8ac326745}

const apiURL = "...";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });