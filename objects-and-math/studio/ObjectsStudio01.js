// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let selectedIds = [];
  while(selectedIds.length < 3){
    let index = Math.floor(Math.random() * arr.length);
    let selectedId = arr[index];
    if(!selectedIds.includes(selectedId)){
      selectedIds.push(selectedId);
    }
  }
  return selectedIds;
}

// Code your buildCrewArray function here:
function buildCrewArray(array1, array2) {
  let crew = [];
  let idValues = selectRandomEntry(array1); // three ids will be selected
  console.log("The selected random Ids are : ", idValues);
  for (let i = 0; i < idValues.length; i++) {
    // for each id from the array
    for (let j = 0; j < array2.length; j++) {
      if (idValues[i] === array2[j].astronautID) {
        crew.push(array2[j].name);
      }
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890
};

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF
];

// Code your template literal and console.log statements:

console.log(selectRandomEntry(idNumbers));

let finalCrew = buildCrewArray(idNumbers, animals);
console.log(finalCrew);
if (finalCrew.length <= 3) {
console.log(`${finalCrew[0]}, ${finalCrew[1]}, and ${finalCrew[2]} are going to space!`);
}
