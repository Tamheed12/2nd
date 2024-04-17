//Questan: 14
console.log("\t\t\n Questan: 14");
var team = ['Mustafa', 'Hamza', 'Rizwan', 'Hasnain'];
team.forEach(function (te) { console.log("".concat(te, " is invite for football team")); });
//Questan: 19
console.log("\t\t\n Questan: 19");
console.log("we are invite ".concat(team.length, ".you in our football team"));
//Questan: 15
console.log("\t\t\n Questan: 15");
var notInTeam = 'Rizwan';
console.log("".concat(notInTeam, " is out from team\n"));
var newperson = 'Atif';
team[team.indexOf(notInTeam)] = newperson;
team.forEach(function (element) { console.log("".concat(element, " in the football team")); });
//Questan: 16
console.log("\t\t\n Questan: 16");
var old = ['Hamad', 'Waris', 'Ali raza'];
console.log('\tTeam done');
//First member
team.unshift(old[0]);
//Middle member
team.splice(team.length / 2, 2, old[1]);
//Last member
team.push(old[2]);
team.forEach(function (element) { console.log("You are in our team ".concat(element)); });
//Questan: 17
console.log("\t\t\n Questan: 17");
while (team.length > 2) {
    var remove = team.pop();
    console.log("".concat(remove, " are not able to be team capten"));
}
team.forEach(function (element) { console.log("".concat(element, " is team capten")); });
