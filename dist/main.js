const nav = document.querySelector(".nav");
const btn = document.querySelector(".menu-btn__burger");
const li = document.querySelectorAll(".nav__menu__item");
const overlay = document.querySelector(".overlay");

btn.onclick = function() {
    nav.classList.toggle("open");
    btn.classList.toggle("open");
    li.forEach(li => {
        li.classList.toggle("open");
    });
    overlay.classList.toggle("open");

}