let fullName = document.getElementById("fullname");

const highlight = function (el) {
  el.style.background = "grey";
};

const revert = function (el) {
  el.style.background = "white";
};

function confirmInput() {
  document.write("You've Clicked the Submit Button");
}
const resetMessage = () => {
  alert("You have reset your form inputs");
};
