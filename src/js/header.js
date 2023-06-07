'use strict';

const navbar = document.querySelector('.navbar__menu__list');
const toggle = document.querySelectorAll('.navbar__button__burger-toggle');

//Open/hide burger menu
function showMenu() {
    toggle.forEach(elem => {
        if(elem.style.opacity === '1') {
            elem.style.opacity = '0';
            navbar.classList.remove('active');
        } else {
            elem.style.opacity = '1';
            navbar.classList.add('active');
        }
    })
}

//Hide menu when clicking outside burger menu
window.addEventListener("click", (event) => {
    if (document.getElementById('burger').contains(event.target)) {
        showMenu();
    } else if (!navbar.contains(trg)) {
        navbar.classList.remove('active');
        toggle[1].style.opacity = '0';
        toggle[0].style.opacity = '1';
    }
})