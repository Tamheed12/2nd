//make function with parameter
function Pizza() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\n Order making for Pizza: \n");
    item.forEach(function (items) {
        return console.log(items);
    });
    console.log("\n Now enjoy Your Pizza");
}
// call three time
Pizza('Extra Chese', 'Tika boti', 'spice');
Pizza('Paporoni');
Pizza('Full Bake', 'Soft Corner', 'Chiken', 'Mayo', 'Extra Tomoto', 'Full Spice');
