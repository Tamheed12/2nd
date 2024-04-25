//defualt value
function shit(size, print) {
    if (size === void 0) { size = 'Large'; }
    if (print === void 0) { print = 'I love TypeScript'; }
    console.log("Your order. Shirt ".concat(size, " size and print '").concat(print, "' on shirt"));
}
//default large and print i love typescript
shit();
//change size
shit('Medium');
