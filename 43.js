// 1st function show magician name with foreach
function magicianShow(magician) {
    magician.forEach(function (name) {
        return console.log(name);
    });
}
// 2nd function assign the The great with Magician
function assignGreat(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
// Give the nmae of magican
var magicianName = ['Atif', 'Asif', 'Ali', 'Abdula'];
//make copy of magician name
var copy = magicianName.slice();
//copy the great function
var copy2 = assignGreat(copy);
//orignal
console.log("\n\torginal Array\n");
magicianShow(magicianName);
//copy
console.log("\n\tcopy Array\n");
magicianShow(copy2);
