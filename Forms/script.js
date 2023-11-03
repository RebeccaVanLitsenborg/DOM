//TODO: Add a keyup listener on the first input field so that feild input goes into <span id="display-firstname">
const inputField = document.getElementById("firstname");
const displayFirstName = document.getElementById("display-firstname");

inputField.addEventListener("keyup", function {
  const inputText = inputField.value;
  displayFirstName.textContent = inputText;
});
