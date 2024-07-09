// Code your orbitCircumference function here:
function orbitCircumference(radius){
  let circumference = 2*(Math.PI)*radius;
  let roundedCircumference = Math.round(circumference);
  return roundedCircumference;
}

// Code your missionDuration function here:
function missionDuration(numOfOrbits, orbitRadius, orbitalSpeed){
  let orbitCircum = orbitCircumference(orbitRadius);
  let distance = numOfOrbits * orbitCircum;
  time = distance/orbitalSpeed;
  roundedTime = Math.round(time*100)/100;
  return roundedTime;
}

let numOfOrbits = 5; 
let orbitRadius = 1000;
let orbitalSpeed = 28000;
let circum = orbitCircumference(orbitRadius);
let durationOfMission = missionDuration(numOfOrbits,orbitRadius,orbitalSpeed);
console.log(`'The mission will travel ${circum} km around the planet, and it will take ${durationOfMission} hours to complete.'`)


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 // Code your oxygenExpended function here:

function oxygenExpended(crewMember){
let numOfOrbits = 3;
let orbitRadius = 2000;
let orbitalSpeed = 28000;
let spaceWalk = missionDuration(numOfOrbits,orbitRadius,orbitalSpeed);
let o2Consumed = crewMember.o2Used(spaceWalk);
let oxygenConsumed = Math.round(o2Consumed*1000)/1000;
return `${crewMember.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${oxygenConsumed} kg of oxygen.'`
}

let crewMember = selectRandomEntry(crew);
console.log(oxygenExpended(crewMember));
 