const groundLine = document.querySelector(".ground-line");
const bush1 = document.querySelector(".bush1 img");
const bush2 = document.querySelector(".bush2 img");
const armadillo = document.querySelector(".armadillo");
const house = document.querySelector(".house");
const tree1 = document.querySelector(".tree1 img");
const smallBush1 = document.querySelector(".smallbush1 img");
const treeMid = document.querySelector(".tree-mid img");
const motto = document.querySelector(".motto");
const tree2 = document.querySelector(".tree2 img");
const sun = document.querySelector(".sun");
const bcg = document.querySelector(".bcg img");
const clouds = document.querySelector(".clouds img");
const loader = document.querySelector(".loader");
const animationItems = [groundLine, bush1, bush2, armadillo, house, tree1, smallBush1, treeMid, motto, tree2, sun, bcg, clouds]





window.addEventListener('load', function () {              // Strona całkowicie wczytana
    console.log("Loaded")
    loader.style.display = "none"



    setTimeout(function () {                   // Pojawienie się animacji
        nav.classList.remove("hidden")
        animationItems.forEach(item => {
            item.classList.remove("start")
        })
    }, 1000);



})


