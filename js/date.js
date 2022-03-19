// Todays Current Date
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var todaysWeekDay = days[d.getDay()];
var todaysDay = d.getDate();
var todaysMonth = months[d.getMonth()];
var todaysYear = d.getFullYear();

var fullDate = todaysWeekDay + ", " + todaysMonth + " " + todaysDay + ", " + todaysYear;

console.log(fullDate);
document.getElementById("currentDate").innerHTML = fullDate;
   
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

function toggleBanner() {
    document.getElementById("banner").classList.toggle("closedBanner");
}
const y = document.getElementById('bannerButton');
y.onclick = toggleBanner;
let day = now.getDay();
function bannerCheck() {
    switch (day) {
        case 1:
            break;
        case 2:
            break;
        default:
            toggleBanner();
            break;
    }
}
window.onload = bannerCheck;