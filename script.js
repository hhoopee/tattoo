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
    paralaxContainer1.style.transform = `translateY(${move/2}px)`;
    paralaxContainer2.style.transform = `translateY(${-move/2}px)`;
  }

}

const slides = document.querySelectorAll('.gallery-slide');

slides.forEach(slide => {
  lightGallery(slide, {
    download: false,
  });
})

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    smartSpeed: 2000,
    autoplayTimeout:5000,
    autoplayHoverPause: true,
    autoplay: true,
    nav: true,
    dots: false,
    items: 3,
    navClass: ["owl-prev", "owl-next"],
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
  });
});

