//make current user array
var current = ['Ali Raza', 'Afzal', 'Usman', 'Atif', 'Asif'];
//make new user array
var new_user = ['Mustafa', 'Atif', 'Usman', 'Ayan', 'Arsalan', 'Usman', 'Atif', 'Asif', 'Hamza', 'Ali'];
// now making is new user name is exist or not
new_user.forEach(function (newOne) {
    var condition = current.some(function (current_one_user) { return current_one_user.toLowerCase() === newOne.toLowerCase(); });
    if (condition) {
        console.log("Sorry! . ".concat(newOne, " username is all ready Exit\n"));
    }
    else {
        console.log("".concat(newOne, " name is available for make acount\n"));
    }
});
