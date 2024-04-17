

        //Questan: 14
console.log(`\t\t\n Questan: 14`);

let team:string[]=['Mustafa','Hamza','Rizwan','Hasnain'];
team.forEach(te => 
{console.log(`${te} is invite for football team`)});


        //Questan: 15
console.log(`\t\t\n Questan: 15`);

let notInTeam:string='Rizwan';
console.log(`${notInTeam} is out from team\n`);

let newperson:string='Atif';
team[team.indexOf(notInTeam)]=newperson;

team.forEach(element => 
{console.log(`${element} in the football team`)});


        //Questan: 16
console.log(`\t\t\n Questan: 16`);

let old:string[]=['Hamad','Waris','Ali raza'];
console.log('\tTeam done')
//First member
team.unshift(old[0]);
//Middle member
team.splice(team.length/2,2,old[1]);
//Last member
team.push(old[2]);

team.forEach(element => 
{console.log(`You are in our team ${element}`)});


        //Questan: 17
console.log(`\t\t\n Questan: 17`);

while(team.length>2)
{const remove=team.pop();
console.log(`${remove} are not able to be team capten`)}
team.forEach(element => 
{console.log(`${element} is team capten`)});


        //Questan: 19
console.log(`\t\t\n Questan: 19`);
console.log(`we are invite ${team.length}  player in our football team`)

