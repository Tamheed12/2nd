

//first function make array with foreach 
function showMagicians(magicians:string[])
{
    magicians.forEach(element => 
        {console.log(element)});
}

//second function add The Great 
function makeGreat(magicians:string[])
{
    return magicians.map(name => `The Great ${name}`);
}

let magiciansName=['Mustafa','Ali','Hamza']


showMagicians(makeGreat(magiciansName));
