const navButton = document.querySelector('.nav-button');
const navWrap = document.querySelector('.nav-wrap');

navButton.addEventListener('click', () => {
    navWrap.classList.toggle('active');
    navButton.classList.toggle('active');
})