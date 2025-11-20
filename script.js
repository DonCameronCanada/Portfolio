const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-gallery a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Get the href (short or full YouTube link)
    const href = link.getAttribute("href");

    // Extract the video ID (works for youtu.be and youtube.com/watch?v=)
    let videoId = "";
    if (href.includes("youtu.be/")) {
      videoId = href.split("youtu.be/")[1];
    } else if (href.includes("watch?v=")) {
      videoId = href.split("watch?v=")[1];
    }

    // Build proper embed URL
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    videoFrame.src = videoUrl;
    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  videoFrame.src = ""; // stop playback
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
    videoFrame.src = "";
  }
};