// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object
let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: "2",
  moveCounter: 0,
  move: function () {
    let move = Math.floor(Math.random() * 11);
    this.moveCounter++;
    return move;
  }
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 4,
  moveCounter: 0,
  move: function () {
    let move = Math.floor(Math.random() * 11);
    this.moveCounter++;
    return move;
  }
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 6,
  moveCounter: 0,
  move: function () {
    let move = Math.floor(Math.random() * 11);
    this.moveCounter++;
    return move;
  }
};

let awesomeBeagle = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 8,
  moveCounter: 0,
  move: function () {
    let move = Math.floor(Math.random() * 11);
    this.moveCounter++;
    return move;
  }
};

let brightTardigrade = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 10,
  moveCounter: 0,
  move: function () {
    let move = Math.floor(Math.random() * 11);
    this.moveCounter++;
    return move;
  }
};

// Create an array to hold the animal objects.

let crew = [
  superChimpOne,
  salamander,
  superChimpTwo,
  awesomeBeagle,
  brightTardigrade
];

// Print out the relevant information about each animal.
function crewReports(animal) {
  return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their id is ${animal.astronautID}.`;
}

console.log(crewReports(superChimpOne));
console.log(crewReports(salamander));
console.log(crewReports(superChimpTwo));
console.log(crewReports(awesomeBeagle));
console.log(crewReports(brightTardigrade));

// Start an animal race!
function fitnessTest(animals) {
  let results = [];
  animals.forEach((animal) => {
    let distance = 0;
    while (distance < 20) {
      distance += animal.move();
    }
    let result = `${animal.name} took ${animal.moveCounter} turns to take 20 steps`;
    results.push(result);
  });
  return results;
}
console.log(fitnessTest(crew));
