var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//make for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var one = numbers_1[_i];
    var ordinal = void 0;
    if (one === 1) {
        ordinal = 'st';
    }
    else if (one === 2) {
        ordinal = 'nd';
    }
    else if (one === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log(" ".concat(one).concat(ordinal, " "));
}
