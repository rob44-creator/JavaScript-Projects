//main.js
function Ride_Function() { //ternary operator
    var Height = document.getElementById("Height").value;
    var Can_ride = Height < 52 ? "You are too short " : "You are tall enough"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function Vehicle(Make, Model, Year, Colour) { //keywords
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}
var Jack = new Vehicle("Dodge", "Charger", 2020, "Red");
var Emily = new Vehicle("Ford", "Mustang", 2019, "Blue");
var Erik = new Vehicle("Toyota", "Camry", 2018, "White");

function myFunction() { //display results of the constructor
    document.getElementById("Keywords_and_Constructors").innerHTML = "Jack drives a " + Jack.Vehicle_Colour + " -coloured " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year + ".";
}

function add_Strings() { //this is a nested function
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}
