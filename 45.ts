
//make the function of manufacturerCar
function manufacturerCar(manufacturer,model,...options)
{
//  initialize a car with maufactuer and model
    let car={
            manufacturer:manufacturer,
            model:model
            };
//  add additional option to car object
    options.forEach(element => 
    {
        let [key,value]=element.split(':');
        car[key.trim()]=value.trim();
    });
        return car;
}
// call the function
let myCar=manufacturerCar('Honda','2016','color: White','Sunroof: True')
console.log(myCar);
