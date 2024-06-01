const navButton = document.querySelector(".nav-button");
const navWrap = document.querySelector(".nav-wrap");
const promoBg = document.querySelector(".promo-bg");
const aboutSection = document.querySelector(".about-content__column-1");

const paralaxContainer1 = document.querySelector(".parallax-container-1");
const paralaxContainer2 = document.querySelector(".parallax-container-2");

window.addEventListener("load", () => {
  promoBg.classList.add("active");
});

navButton.addEventListener("click", () => {
  navWrap.classList.toggle("active");
  navButton.classList.toggle("active");
});

window.addEventListener("scroll", scroll);
scroll();

function scroll() {
  const r = aboutSection.getBoundingClientRect();
  const wHeight = window.innerHeight;

  const paralaxYCenter = r.y + r.height / 2;
  const scrollYCenter = window.innerHeight / 2;

  const move = (paralaxYCenter - scrollYCenter) * 0.16 - 100;

  if (r.bottom > 0 && r.top < wHeight && r.top > 0) {
    paralaxContainer1.style.transform = `translateY(${move / 2}px)`;
    paralaxContainer2.style.transform = `translateY(${-move / 2}px)`;
  }
}

const slides = document.querySelectorAll(".gallery-slide");

slides.forEach((slide) => {
  lightGallery(slide, {
    download: false,
    counter: false,
  });
});

const carousels = document.querySelectorAll(".owl-carousel");

carousels.forEach((carousel) => {
  const dataLoop = carousel.getAttribute("data-loop");
  const dataAutoplay = carousel.getAttribute("data-autoplay");
  const dataLgItems = carousel.getAttribute("data-lg-items");
  const dataMdItems = carousel.getAttribute("data-md-items");
  const dataSmItems = carousel.getAttribute("data-sm-items");
  const dataSmartSpeed = carousel.getAttribute("data-smart-speed");
  const dataAutoplayTimeout = carousel.getAttribute("data-autoplay-timeout");
  const dataAutoplayHoverPause = carousel.getAttribute("data-autoplay-hoverpause");
  const dataMouseDrag = carousel.getAttribute("data-mouse-drag");
  const dataNav = carousel.getAttribute("data-nav");
  const dataDots = carousel.getAttribute("data-dots");

  $(carousel).owlCarousel({
    autoplay: dataAutoplay === "true" ? true : false,
    loop: dataLoop === "true" ? true : false,
    items: dataLgItems,
    smartSpeed: +dataSmartSpeed,
    autoplayTimeout: +dataAutoplayTimeout,
    autoplayHoverPause: dataAutoplayHoverPause === "true" ? true : false,
    mouseDrag: dataMouseDrag === "true" ? true : false,
    nav: dataNav === "true" ? true : false,
    dots: dataDots === "true" ? true : false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
  });
});

