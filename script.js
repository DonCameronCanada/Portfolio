const track = document.querySelector('.carousel-track');

function scrollNext() {
  track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
}

function scrollPrev() {
  track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
}