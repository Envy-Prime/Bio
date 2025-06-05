window.addEventListener('scroll', () => {
  const video = document.querySelector('.video-container video');
  const scrollY = window.scrollY;
  const fadeStart = 0;    // bắt đầu mờ dần
  const fadeEnd = 300;    // mờ hoàn toàn sau 300px
  const opacity = 1 - Math.min(Math.max(scrollY - fadeStart, 0) / (fadeEnd - fadeStart), 1);
  video.style.opacity = opacity;
});

document.addEventListener("touchend", function(event) {
  if (event.cancelable) {
    event.preventDefault();
  }
});
