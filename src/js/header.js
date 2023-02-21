'use strict';

const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar_menu_list');

burger.addEventListener('click', () => {
    showMenu();
})

window.addEventListener("click", (e) => {
    let target = e.target;
    console.log(e);
    if (target.tagName !== "A") {
        console.log("Hello2");
        showMenu();
        // navbar.classList.remove('inactive');
    }
});

function showMenu() {
    if(burger.innerHTML === '<span style="font-size: 40px;">&times;</span>' || burger.innerHTML === '<span style="font-size: 40px;">×</span>') {
        burger.innerHTML = '<span>&#x2013;<br>&#x2014;<br>&#x2014;</span>';
        navbar.classList.remove('active');
        navbar.classList.add('inactive');
    } else {
        burger.innerHTML = '<span style="font-size: 40px;">&times;</span>';
        navbar.classList.remove('inactive');
        navbar.classList.add('active');
    }
}