let button = document.querySelector(".button");
let background = document.querySelector(".backgroundColor");

button.addEventListener("click", () => {
    background.classList.toggle("backColor")
});