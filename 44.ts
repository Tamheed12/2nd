
//make function with parameter
function Pizza(...item:string[])
{
    console.log(`\n Order making for Pizza: \n`);
        
    item.forEach(items => 
            console.log(items));

    console.log(`\n Now enjoy Your Pizza`);
}


// call three time

Pizza('Extra Chese','Tika boti','spice')

Pizza('Paporoni')

Pizza('Full Bake','Soft Corner','Chiken','Mayo','Extra Tomoto','Full Spice')