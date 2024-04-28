//first function make array with foreach 
function showMagicians(magicians) {
    magicians.forEach(function (element) { console.log(element); });
}
//second function add The Great 
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magiciansName = ['Mustafa', 'Ali', 'Hamza'];
showMagicians(makeGreat(magiciansName));
