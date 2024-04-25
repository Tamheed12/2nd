var userNames = ['Hamza', 'Taha', 'Tasver', 'Hassan', 'Afzal'];
userNames.forEach(function (message) {
    if (message === 'Afzal') {
        console.log("\nHello ".concat(message, " .You want to check status"));
    }
    else {
        console.log("\nWelcome back ".concat(message, " .How may i help you"));
    }
});
