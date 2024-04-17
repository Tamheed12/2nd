var num1 = 45;
var num2 = 45;
var num3 = 23;
var name_1 = 'tamheed';
var name_2 = 'TAMHEED';
//  lowercase function
if (name_1 == name_2) {
    console.log('\nName are equal');
}
else {
    console.log('\nName are not equal');
}
//  equality
if (num1 == num2) {
    console.log('\nNumber are equal');
}
else {
    console.log('\nNumber are not equal');
}
//  inequality
if (num1 != num3) {
    console.log('\nNumber are not equal');
}
else {
    console.log('\nNumber are equal');
}
//greater than    
if (num1 > 40) {
    console.log('\nNumber are greater than');
}
else 
//less thna
if (num3 < 24) {
    console.log('\nNumber are less than');
}
//greater than and equal    
if (num1 >= 40) {
    console.log('\nNumber are greater than');
}
else 
//less than and equal
if (num3 <= 24) {
    console.log('\nNumber are less than');
}
console.log((num1 + num2 && num2 + num3) == 68);
console.log((num1 + num2 || num2 + num3) == 68);
