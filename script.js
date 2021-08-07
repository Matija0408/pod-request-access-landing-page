document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
});

function validateEmail() {
  let mail = document.getElementById("email").value;

  let pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (pattern.test(mail)) {
    let colorChange = document.getElementById("noteColor");
    colorChange.classList.remove("redFont");
    colorChange.classList.add("greenFont");
    // colorChange.className += "greenFont";
    return (document.getElementById("emailFieldNotification").innerHTML =
      "Email address is valid.");
  } else {
    return (document.getElementById("emailFieldNotification").innerHTML =
      "Please enter a valid email address!");
  }
}
