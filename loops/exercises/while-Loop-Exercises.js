const input = require("readline-sync");
const altitudeIncrement = 50;
const targetAltitude = 2000;
const minFuelLevel = 5000;
const maxFuelLevel = 30000;
const minNumOfAstronauts = 1;
const maxNumOfAstronauts = 7;

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel = 0;
let noOfAstronautsAboard = 0;
let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = input.question("Enter a value for starting fuel level :");

while (isNaN(startingFuelLevel) || startingFuelLevel < minFuelLevel || startingFuelLevel > maxFuelLevel) {
  startingFuelLevel = input.question(`Enter a value greater than ${minFuelLevel} but less than ${maxFuelLevel} :`);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

noOfAstronautsAboard = input.question("Enter the numbe of Astronauts : ");

while (isNaN(noOfAstronautsAboard) || noOfAstronautsAboard < minNumOfAstronauts || noOfAstronautsAboard > maxNumOfAstronauts) {
  noOfAstronautsAboard = input.question(`Please enter a number between ${minNumOfAstronauts} and ${maxNumOfAstronauts} : `);
}

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let currentFuelLevel = startingFuelLevel;
let fuelPerIteration = (100 * noOfAstronautsAboard);

while (currentFuelLevel >= fuelPerIteration) {
  currentFuelLevel -= fuelPerIteration;
  shuttleAltitude += altitudeIncrement;
}
console.log(`The final altitude that reached is ${shuttleAltitude} km and 
the remaining fuel available is ${currentFuelLevel}`);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);

if (shuttleAltitude >= targetAltitude) {
  console.log("Orbit achieved");
} else {
  console.log("Failed to reach orbit");
}
