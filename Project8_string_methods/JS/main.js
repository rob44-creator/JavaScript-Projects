//main.js
//the concat() method
function full_sentence() {
    var part_1 = "Can you tell me ";
    var part_2 = "what day it is ";
    var part_3 = "today please...";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}
//the slice() method
function slice_Method() {
    var sentence = "Rob is a Legend";
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}
//the toString method
function string_Method() {
    var myNumber = 50;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}
//the toPrecision method
function precision_method() {
    var myNumber = 123.45678910111213;
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(4);
}

