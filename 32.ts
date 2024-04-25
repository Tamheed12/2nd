
//make current user array
let current=['Ali Raza','Afzal','Usman','Atif','Asif'];

//make new user array
let new_user=['Mustafa','Atif','Usman','Ayan','Arsalan','Usman','Atif','Asif','Hamza','Ali'];


// now making is new user name is exist or not
new_user.forEach(newOne => 
{
    let condition:boolean=current.some(current_one_user => current_one_user.toLowerCase() === newOne.toLowerCase())

    if(condition)
        {
            console.log(`Sorry! . ${newOne} username is all ready Exit\n`)
        }    
    else
        {
            console.log(`${newOne} name is available for make acount\n`)
        }
});
