const audio = document.getElementById("audio");
const video = document.getElementById("video");
const swap = document.getElementById("swap");
const add = document.getElementById("add");
const del = document.getElementById("delete");
const audioContainer = document.querySelector(".container-one");

function swapElements() {
  // create marker element and insert it where obj1 is
  var temp = document.createElement("div");
  audio.parentNode.insertBefore(temp, audio);

  // move audio to right before video
  video.parentNode.insertBefore(audio, video);

  // move video to right before where obj1 used to be
  temp.parentNode.insertBefore(video, temp);

  // remove temporary marker node
  temp.parentNode.removeChild(temp);
}

swap.addEventListener("click", swapElements);

let source = `
<source src="../../resources/audio/JackMa-HowIOvercameFailure.mp3"/>`;

let aud = document.createElement("audio");
aud.setAttribute("controls", "controls");
aud.setAttribute("id", "audio");
aud.innerHTML = source;

add.addEventListener("click", function () {
  console.log("Adding");
  audioContainer.appendChild(aud);
});

del.addEventListener("click", function () {
  audio.remove();
});
