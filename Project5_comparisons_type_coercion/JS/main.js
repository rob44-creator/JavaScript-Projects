//main.js
var x = true; //boolean data type

document.write(typeof x); //data type of variable
document.write("<br>");

document.write("10" + 10); //string and number
document.write("<br>");

document.write(x === y); //=== operator
document.write("<br>");

document.write(5 == 5); //== operator
document.write("<br>");

document.write(10 > 5 || 11 < 6); //|| operators
document.write("<br>");

document.write(10 > 5 && 11 < 6); //&& operators
document.write("<br>");

function not_Function() { //! operator
    document.getElementById("Not").innerHTML = ! (1 > 2);
}
