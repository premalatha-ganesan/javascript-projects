// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10-05-34 am";
let astronautsCount = 7;
let astronautsStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautsCount * averageAstronautMassKg;
let fuelMassKg = 76000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "Clear";
let preparedForLiftOff = true;
let astronautsCountCheck = false;
let astronautsStatusCheck = false;
let totalMassKgCheck = false;
let fuelLevelCheck = false;
let fuelTempCheck = false;
let weatherStatusCheck = false;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautsCount <= 7){
astronautsCountCheck = true;
console.log("Astronauts Count verified");
}else {
    console.log("Astronaut count exceeds for shuttle launch");
}
// add logic below to verify all astronauts are ready
if (astronautsStatus = 'Ready'){
astronautsStatusCheck = true;
console.log("Astronauts ready to go");
} else {
    console.log("Astronauts not ready");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    totalMassKgCheck = true;
    console.log("Total Mass Kg verified");
} else {
    console.log("Total Mass exceeds the limit");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if( fuelTempCelcius > minimumFuelTemp && fuelTempCelcius < maximumFuelTemp){
    fuelTempCheck = true;
    console.log("Fuel is within the appropriate range");
}else 
{
    console.log("Fuel is not in the appropriate range");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel == 100){
    fuelLevelCheck = true;
    console.log("Fuel level is at 100%");
}else {
    console.log("Fuel level is not at 100%");
}

// add logic below to verify the weather status is clear
if (weatherStatus == "Clear"){
    weatherStatusCheck = true;
    console.log("Weather status is clear")
}else{
    console.log("Weather status is not clear");
}


// Verify shuttle launch can proceed based on above conditions
if (astronautsCountCheck == true && 
    astronautsStatusCheck == true && 
    totalMassKgCheck == true && 
    fuelTempCheck == true && 
    fuelLevelCheck == true && 
    weatherStatusCheck == true )
    {
    preparedForLiftOff = true;
}else {
    preparedForLiftOff = false;
}


if ( preparedForLiftOff == true){
console.log("All systems are a go! Initializing space shuttle launch sequence");
console.log("----------------------------------------------------------------");
console.log("Date : " + date);
console.log("Time : " + time);
console.log("Astronaut Count : " + astronautsCount);
console.log("Crew mass : " + crewMassKg);
console.log("Fuel Mass : " + fuelMassKg);
console.log("Shuttle Mass : " + shuttleMassKg);
console.log("Total Mass : " + totalMassKg);
console.log("Fuel Temperature : " + fuelTempCelcius);
console.log("Weather status : " + weatherStatus);
console.log("------------------------------------------------------------------");
console.log("Have a safe trip astronauts! ");
}
else {
    console.log("Launching conditions not met **** Shut down the launch operations *** ")
}
