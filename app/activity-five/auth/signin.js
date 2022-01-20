const highlight = function (el) {
  el.style.background = "grey";
};

const revert = function (el) {
  el.style.background = "white";
};

const link = `<a href = ""../LifeHacksIndex.html"">Click this Link</a>`;

function confirmInput() {
  document.write("You've Logged in to the website");
  document.write(link);
}
