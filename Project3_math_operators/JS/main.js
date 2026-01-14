//main.js
function addition() { //Defining and naming addition function
    var result = 5 + 10;
    document.getElementById("Add").innerHTML = "5 + 10 = " + result;
}

function subtraction() {
    var result = 10 - 5;
    document.getElementById("Subtract").innerHTML = "10 - 5 = " + result;
}

function multiplication() {
    var result = 5 * 10;
    document.getElementById("Multiply").innerHTML = "5 * 10 = " + result;
}

function division() {
    var result = 10 / 5;
    document.getElementById("Divide").innerHTML = "10 / 5 = " + result;
}

function random() {
    var result = Math.random() * 100;
    document.getElementById("Ran").innerHTML = "Random number: " + result;
}

function modulus_operator() {
    var modulus = 10 % 5;
    document.getElementById("Mod").innerHTML = 
    "When you divide 10 by 5, the remainder is " + modulus; //Print result in HTML
    
}