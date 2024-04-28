function manufacturerCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (element) {
        var _a = element.split(':'), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var myCar = manufacturerCar('Honda', '2016', 'color: White', 'Sunroof: True');
console.log(myCar);
