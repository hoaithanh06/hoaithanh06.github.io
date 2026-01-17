const overlay = document.getElementById("startOverlay");
const btn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");
const container = document.querySelector(".container");

btn.onclick = () => {
  music.play();
  overlay.style.display = "none";
  container.classList.remove("hidden");
};
