document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.querySelectorAll(".carousel");
  M.Carousel.init(carouselElement, {
    duration: 150,
    dist: 0,
    shift: 5,
    padding: 5,
    numVisible: 1,
    indicators: true,
    nowWrap: false,
  });
});
