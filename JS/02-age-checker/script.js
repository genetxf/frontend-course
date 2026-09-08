// Function: checks the age from the input box.
function checkAge() {
  let ageInput = document.getElementById("ageInput");
  let result = document.getElementById("result");

  // Variable: stores the user's age as a number.
  let age = Number(ageInput.value);

  // Condition: decides which message should be shown.
  if (age >= 18) {
    result.textContent = "You are an adult.";
    result.className = "result success";
  } else {
    result.textContent = "You are not an adult yet.";
    result.className = "result warning";
  }
}

document.getElementById("checkButton").addEventListener("click", checkAge);
