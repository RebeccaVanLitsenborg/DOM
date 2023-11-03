const inputFirstname = document.getElementById("firstname");
const displayFirstname = document.getElementById("display-firstname");

inputFirstname.addEventListener("keyup", function() {
 
  displayFirstname.textContent = inputFirstname.value;
});

const ageInput = document.getElementById("age");
const hardTruthSection = document.getElementById("a-hard-truth");

ageInput.addEventListener("keyup", function() {
  const ageValue = ageInput.value.trim();
  const age = parseInt(ageValue, 10);

  if (ageValue === "") {
    hardTruthSection.style.visibility = "hidden";
  } else {
    if (age < 18) {
      hardTruthSection.style.visibility = "hidden";
    } else {
      hardTruthSection.style.visibility = "visible";
    }
  }
});

const passwordInput = document.getElementById("pwd");
const passwordConfirmInput = document.getElementById("pwd-confirm");

function validatePassword() {
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;
  const isShort = password.length < 6;
  const doNotMatch = password !== passwordConfirm && passwordConfirm !== "";

  passwordInput.style.borderColor = isShort || doNotMatch ? "red" : "";
  passwordConfirmInput.style.borderColor = doNotMatch ? "red" : "";
}

passwordInput.addEventListener("keyup", validatePassword);
passwordConfirmInput.addEventListener("keyup", validatePassword);

const toggleDarkMode = document.getElementById("toggle-darkmode");

toggleDarkMode.addEventListener("change", function() {
  if (toggleDarkMode.value === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
