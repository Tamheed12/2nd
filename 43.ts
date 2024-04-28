
// 1st function show magician name with foreach
function magicianShow(magician:string[])
{
    magician.forEach(name => 
        console.log(name)
    );
}

// 2nd function assign the The great with Magician
function assignGreat(magician:string[])
{
    return magician.map(name => `The great ${name}`);
}


// Give the nmae of magican
let magicianName=['Atif','Asif','Ali','Abdula'];


//make copy of magician name
let copy=magicianName.slice()

//copy the great function
let copy2=assignGreat(copy)

//orignal
console.log(`\n\torginal Array\n`);
magicianShow(magicianName)

//copy
console.log(`\n\tcopy Array\n`);
magicianShow(copy2)