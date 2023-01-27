let formElement = document.querySelector(".js-form");
let selectElement = document.querySelector(".js-select");
let resultElement = document.querySelector(".js-result");
let option1Element = document.querySelector(".js-select__option1");
let option2Element = document.querySelector(".js-select__option2");
let option3Element = document.querySelector(".js-select__option3");
let option4Element = document.querySelector(".js-select__option4");
let option5Element = document.querySelector(".js-select__option5");
let option6Element = document.querySelector(".js-select__option6");
let option7Element = document.querySelector(".js-select__option7");
let option8Element = document.querySelector(".js-select__option8");
let option9Element = document.querySelector(".js-select__option9");
let option10Element = document.querySelector(".js-select__option10");
let option11Element = document.querySelector(".js-select__option11");
let option12Element = document.querySelector(".js-select__option12");
let option13Element = document.querySelector(".js-select__option13");
let option14Element = document.querySelector(".js-select__option14");
let valueElement = document.querySelector(".js-value");

formElement.addEventListener("input", (event) => {
    event.preventDefault();


    if (selectElement.value === option1Element.value) {
        let number = valueElement.value
        let result = number * 0.23

        resultElement.innerText = (result.toFixed(2))
    }

    if (selectElement.value === option2Element.value) {
        let number = valueElement.value
        let result = number * 0.36


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option3Element.value) {
        let number = valueElement.value
        let result = number * 0.31


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option4Element.value) {
        let number = valueElement.value
        let result = number * 0.19


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option5Element.value) {
        let number = valueElement.value
        let result = number * 1.05


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option6Element.value) {
        let number = valueElement.value
        let result = number * 2.36


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option7Element.value) {
        let number = valueElement.value
        let result = number * 8.54


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option8Element.value) {
        let number = valueElement.value
        let result = number * 4.35


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option9Element.value) {
        let number = valueElement.value
        let result = number * 1.58


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option10Element.value) {
        let number = valueElement.value
        let result = number * 12.59


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option11Element.value) {
        let number = valueElement.value
        let result = number * 4.35


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option12Element.value) {
        let number = valueElement.value
        let result = number * 1.57


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option13Element.value) {
        let number = valueElement.value
        let result = number * 0.21


        resultElement.innerText = (result.toFixed(2))
    }
    if (selectElement.value === option14Element.value) {
        let number = valueElement.value
        let result = number * 0.21


        resultElement.innerText = (result.toFixed(2))
    }

});



