const navBcg = document.querySelector(".nav_background");
const nav = document.querySelector("nav");
const navInside = document.querySelector(".nav_inside");
const buttons = document.querySelector(".buttons");
const logo = document.querySelector(".logo img")



window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY
    if (scrollPosition > 0) {
        navBcg.classList.add("on");
        nav.classList.add("fixed");
        navInside.classList.add("centered")
        buttons.classList.add("moved")
        logo.classList.add("smaller")
    }
    else {
        navBcg.classList.remove("on");
        nav.classList.remove("fixed");
        navInside.classList.remove("centered");
        buttons.classList.remove("moved");
        logo.classList.remove("smaller")
    }
})