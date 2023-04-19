let video = document.getElementById("videoPlayer");
let loading = document.getElementById("loading");
let buttons = document.getElementById("buttons");

video.addEventListener("loadstart", function () {
  loading.hidden = false;
});

video.addEventListener("canplay", function () {
  loading.hidden = true;
});

function handleFileChange(event) {
  const file = event.target.files[0];
  if (!file.type.startsWith("video/")) {
    alert("Fichero inválido. Por favor, sube un video");
    return;
  }

  video.src = URL.createObjectURL(file);

  buttons.hidden = false;
}

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function turnUpVideo() {
  try {
    video.volume += 0.1;
  } catch (error) {}
}

function turnDownVideo() {
  try {
    video.volume -= 0.1;
  } catch (error) {}
}
