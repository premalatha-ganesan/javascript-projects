// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
  let takeOffButton = document.getElementById("takeoff");
  let flightStatusPara = document.getElementById("flightStatus");
  let shuttleBg = document.getElementById("shuttleBackground");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  let landingButton = document.getElementById("landing");
  let missionAbortButton = document.getElementById("missionAbort");
  let rocket = document.getElementById("rocket");
  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let right = document.getElementById("right");
  let left = document.getElementById("left");
    

  takeOffButton.addEventListener("click", (event) => {
    let response = window.confirm(
      "Confirm that the shuttle is ready for takeoff"
    );
    if (response) {
      flightStatusPara.innerHTML = "Shuttle in flight";
      shuttleBg.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML = 10000;
    }
  });

  landingButton.addEventListener("click", (event) => {
    window.alert("The shuttle is landing. Landing gear engaged");
    flightStatusPara.innerHTML = "The shuttle has landed";
    shuttleBg.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
  });

  missionAbortButton.addEventListener("click", (event) => {
    
    let response = window.confirm("Confirm that you want to abort the mission");
    if (response) {

      flightStatusPara.innerHTML = "Mission aborted";
      shuttleBg.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = 0;
      
    }
  });

  left.addEventListener("click", (event) => {

    let currentLeft = parseInt(window.getComputedStyle(rocket).left);
    rocket.style.left = currentLeft - 10 + "px";
  });

  right.addEventListener("click", (event) => {
    
    let currentLeft = parseInt(window.getComputedStyle(rocket).left);
    rocket.style.left = currentLeft + 10 + "px";
  });

  up.addEventListener("click", (event) => {
    
    let currentTop = parseInt(window.getComputedStyle(rocket).top);
    rocket.style.top = currentTop - 10 + "px";
  });

  down.addEventListener("click", (event) => {
    
    let currentTop = parseInt(window.getComputedStyle(rocket).top);
    rocket.style.top = currentTop + 10 + "px";
  });
}

window.addEventListener("load", init);
