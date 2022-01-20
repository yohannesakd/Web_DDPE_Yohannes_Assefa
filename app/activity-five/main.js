let video = document.querySelector("video");
let modalbg = document.querySelector(".modal-bg");
let modal = document.querySelector(".modal");
let modalBtn = document.querySelector(".modal-button");

video.addEventListener("play");

function videoNotifPlay() {
  alert("You have started playing the Video ");
}
function videoNotifPause() {
  alert("You have paused the Video");
}
video.onvolumechange = function () {
  alert("The volume has been changed!");
};
