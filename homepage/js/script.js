console.log("Hello world!");

let button = document.querySelector(".popo");
let naglowek = document.querySelector(".naglowek");
button.addEventListener("click", () => {
    
    naglowek.remove();
    
});

console.log(button);