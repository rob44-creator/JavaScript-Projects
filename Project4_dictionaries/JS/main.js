//main.js
function my_Dictionary() {
    var mob = {
        Name:"Creeper",
        Colour:"Green",
        Age:"Unknown",
        Sound:"Bang!",
    };
    delete mob.Colour; //this removes the Colour from the Dictionary
    document.getElementById("Dictionary").innerHTML = mob.Colour;
}