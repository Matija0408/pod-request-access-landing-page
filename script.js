//variable to hold the input value

//variable to validate the input value against

//function to do the input check against set parameters
function ValidateEmail(inputText) {
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("You have entered a valid email address!"); //The pop up alert for a valid email address
    document.form1.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!"); //The pop up alert for an invalid email address
    document.form1.text1.focus();
    return false;
  }
}
// TESTING ARROW FUNCTIONS
let sum = (a, b) => a + b;
console.log(sum(2, 3));

let isPositive = (number) => number >= 0;
console.log(isPositive(3));

let ranNum = () => Math.random();
console.log(ranNum());

document.addEventListener("click", () => console.log("click"));
