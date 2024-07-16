const checkFive = require('../checkFive.js');

describe("checkFive", function() {
    test("Given number is five", function () {
        let result = checkFive(5);
        expect(result).toBe("5 is equal to 5.");
    });

    test("Given number is more than 5", function () {
        let result = checkFive(6);
        expect(result).toBe("6 is greater than 5.");
    });

    test("Given number is less than 3", function () {
        let result = checkFive(3);
        expect(result).toBe("3 is less than 5.");
    });
});

