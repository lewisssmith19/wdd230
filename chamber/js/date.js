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
   
$(document).ready(function () {
            "use strict";
            // Logo innerhalb des Headers klonen
            const clonedLogo = $('header .header_logo').clone();
            // und vor dem input fuer das Hamburger-Menue einfuegen
            $('nav .menu-container').before(clonedLogo);
            clonedLogo.addClass("header__shrink");
            $(window).scroll(function () {
                // Pruefen, ob nach unten gescrollt wurde
                if ($(this).scrollTop() > 130) {
                    $("nav").addClass("stickynav");
                    // ja: Logo expandieren
                    clonedLogo.height(80);
                    clonedLogo.width(80);
                } else {
                    $("nav").removeClass("stickynav");
                    // nein: Logo schrumpfen
                    clonedLogo.height(0);
                    clonedLogo.width(0);
                }
            })
        });