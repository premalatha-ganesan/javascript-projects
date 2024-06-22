let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
console.log(cabinet1 = food.split(',').sort());
console.log(cabinet2 = equipment.split(',').sort());
console.log(cabinet3 = pets.split(',').sort());
console.log(cabinet4 = sleepAids.split(',').sort());

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(cabinet1, cabinet2, cabinet3, cabinet4);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let NumToSelectCabinet = input.question("Select a cabinet in the cargoHold(0-3) : ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(NumToSelectCabinet <=3){
    console.log(`You selected the cabinet${NumToSelectCabinet} and the contents of the selected cabinet are
    ${cargoHold[NumToSelectCabinet]} `);
}
else{
    console.log(`Sorry that cabinet doesnt exist in the cargoHold`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let numberForCabinet = input.question("Select the cabinet number that you want to check the item in :");
let selectedItem = input.question("Select an item in that cabinet : ");

if(numberForCabinet <=3 ){
    if (cargoHold[numberForCabinet].includes(selectedItem)){
        console.log(`Cabinet ${numberForCabinet} does contain ${selectedItem}`);
    }
    else{
        console.log(`Console ${numberForCabinet} does not contain ${selectedItem}`);
    }
}
    else{
        console.log("Invalid index number");
    }


