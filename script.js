//variable to hold the input value

//variable to validate the input value against

//function to do the input check against set parameters
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

// Use this >>>> /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

function validate() {
  let mail = document.getElementById("email").value;

  let pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (pattern.test(mail)) {
    let emailNote = (document.getElementById("emailNote").innerHTML =
      "Email valid");
    return true;
  } else {
    let emailNote = (document.getElementById("emailNote").innerHTML =
      "Please enter valid email address");
    return false;
  }
}
