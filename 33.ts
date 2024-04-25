
let numbers=[1,2,3,4,5,6,7,8,9,]

//make for loop

for(let one of numbers)
{
    let ordinal:string;

    if(one === 1)
        {
           ordinal= 'st';
           
        }
    else if(one === 2)
        {
            ordinal='nd';
        }
    else if(one === 3) 
        {
            ordinal='rd';
        }
    else 
        {
            ordinal='th';
        }

    console.log(` ${one}${ordinal} `)
}
