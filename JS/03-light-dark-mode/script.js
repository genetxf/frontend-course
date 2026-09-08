// Variable: remembers the current mode.
let isDarkMode = false;

// Function: changes the page mode.
function changeMode() {
  let page = document.body;
  let modeText = document.getElementById("modeText");
  let modeButton = document.getElementById("modeButton");

  // Condition: checks if dark mode is already on.
  if (isDarkMode === true) {
    page.classList.remove("dark-mode");
    modeText.innerHTML = "The page is in light mode.";
    modeButton.textContent = "Turn Dark Mode";
    isDarkMode = false;
  } else {
    page.classList.add("dark-mode");
    modeText.textContent = "The page is in dark mode.";
    modeButton.textContent = "Turn Light Mode";
    isDarkMode = true;
  }
}

document.getElementById("modeButton").addEventListener("click", changeMode);
