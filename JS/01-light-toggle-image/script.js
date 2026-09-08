// Variable: remembers if the light is on or off.
let isLightOn = false;

// Function: runs when the button is clicked.
function toggleLight() {
  let lightImage = document.getElementById("lightImage");

  // Condition: checks the current light value.
  if (isLightOn === true) {
    lightImage.src = "images/light-off.svg";
    isLightOn = false;
  } else {
    lightImage.src = "images/light-on.svg";
    isLightOn = true;
  }
}

document.getElementById("toggleButton").addEventListener("click", toggleLight);
