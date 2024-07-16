
let launchcode = {
    organization : 'nonprofit',
    executiveDirector : "Jeff",
    percentageCoolEmployees : '100',
    programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput : function(input) {
        let output = "";
        input = Number(input);

        let divisbleByTwo = isDivisible(input, 2);
        let divisbleByThree = isDivisible(input, 3);
        let divisibleByFive = isDivisible(input, 5);

        /*
        // Brute force solution
        if(divisbleByTwo && !divisbleByThree && !divisibleByFive) {
            output = "Launch!";
        } else if (divisbleByThree && !divisbleByTwo && !divisibleByFive) {
            output = "Code!";
        } else if (divisibleByFive && !divisbleByTwo && !divisbleByThree) {
            output = 'Rocks!';
        } else if (divisbleByTwo && divisbleByThree && !divisibleByFive) {
            output = 'LaunchCode!';
        } else if (divisbleByThree && divisibleByFive && !divisbleByTwo) {
            output =  'Code Rocks!';
        } else if (divisbleByTwo && divisibleByFive && !divisbleByThree) {
            output =  'Launch Rocks!';
        } else if (divisbleByThree && divisbleByTwo && divisibleByFive) {
            output = 'LaunchCode Rocks!';
        } else {
            output = "Rutabagas! That doesn't work.";
        }
        */

        // Bonus Missions
        if (divisbleByTwo) {
            output = "Launch";
        }
        if (divisbleByThree) {
            output += "Code";
        }
        if (divisibleByFive) {
            output += " Rocks"
        }

        if (output.length == 0) {
            output = "Rutabagas! That doesn't work.";
        } else {
            output += "!";
        }
        return output.trimStart();
    }
};

function isDivisible(num, divisor) {
    return num % divisor === 0;
}

module.exports = launchcode;