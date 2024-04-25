

//you may use these name for check the code

// let acount=['Afzal','Hamza','Atif','Asif'];
 let acount=[];


if(acount.length===0)
    {
        console.log('Your website is empty .we need some user');
    }
else
    {
        acount.forEach(element => 
            {
                if(element==='Afzal')
                    {
                        console.log(`Hello ${element} .You want to check acounts status`);
                    }
                else
                    {
                        console.log(`Welcome ${element} for making an acount`);
                    }
            });
    }


