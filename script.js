const navButton = document.querySelector(".nav-button");
const navWrap = document.querySelector(".nav-wrap");
const promoBg = document.querySelector(".promo-bg");
const aboutSection = document.querySelector(".about-content__column-1");

const paralaxContainer1 = document.querySelector(".parallax-container-1");
const paralaxContainer2 = document.querySelector(".parallax-container-2");

console.log(aboutSection);

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
