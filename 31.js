//you may use these name for check the code
// let acount=['Afzal','Hamza','Atif','Asif'];
var acount = [];
if (acount.length === 0) {
    console.log('Your website is empty .we need some user');
}
else {
    acount.forEach(function (element) {
        if (element === 'Afzal') {
            console.log("Hello ".concat(element, " .You want to check acounts status"));
        }
        else {
            console.log("Welcome ".concat(element, " for making an acount"));
        }
    });
}
