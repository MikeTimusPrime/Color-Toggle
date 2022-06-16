const hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let body = document.querySelector(".body");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-menu").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)
function changeBackground(color) {
    body.style.backgroundColor = color;
}

console.log(navMenu);
console.log(body);