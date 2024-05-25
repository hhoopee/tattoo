const navButton = document.querySelector('.nav-button');
const navWrap = document.querySelector('.nav-wrap');
const promoBg = document.querySelector('.promo-bg');

window.addEventListener('load', () => {
    promoBg.classList.add('active');
})

navButton.addEventListener('click', () => {
    navWrap.classList.toggle('active');
    navButton.classList.toggle('active');
})