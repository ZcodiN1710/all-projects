const randomVid = document.querySelector("button");
const videoscontainer = document.querySelector(".video-container");

randomVid.addEventListener("click", () => {
  let Arrayvideo = ["1st video", "2nd video", "3rd video", "4th video"];
  videoscontainer.innerHTML =
    Arrayvideo[Math.round(Math.random() * Arrayvideo.length - 1)];
  Arrayvideo[Math.round(Math.random() * Arrayvideo.length - 1)].style.fontsize =
    "500px";
});
