var _ = require('lodash');

console.log(_);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color = getComputedStyle(body);
var button = document.querySelector("button");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

function generateRandomColor() {
    var tempColor;
    do {
        tempColor = Math.floor(Math.random() * 16777215).toString(16);
    } while (tempColor.length < 6);
    color1.value = "#" + tempColor;

    do {
        tempColor = Math.floor(Math.random() * 16777215).toString(16);
    } while (tempColor.length < 6);
    color2.value = "#" + tempColor;

    setGradient();
}

css.textContent = color.background;
button.addEventListener("click", generateRandomColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);