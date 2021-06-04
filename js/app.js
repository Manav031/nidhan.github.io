window.addEventListener("scroll", () => {
    const header = document.getElementById("head");
    console.log(header);
    header.classList.toggle("sticky", window.scrollY > 0);
});

const ham = document.getElementById("ham");
ham.addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("nav-active");
    console.log(menu);
});

const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
})