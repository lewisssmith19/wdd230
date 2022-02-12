let temperature = 40;
let wind_speed = 5;


document.getElementById("wind_chill").innerHTML = (Math.round(wind_chill = 35.74 + 0.6215 * temperature - 35.75 * (Math.pow(wind_speed, .16)) + 0.4275 * temperature * (Math.pow(wind_speed, .16))))