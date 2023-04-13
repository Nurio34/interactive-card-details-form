const form = document.querySelector(".form") 
const submitted = document.querySelector(".submitted")

const nameInput = document.querySelector("#name-el")
const nameInvalid = document.querySelector("#name-invalid")
const nameEmpty = document.querySelector("#name-empty")

const numberInput = document.querySelector("#number-el")
const numberInvalid = document.querySelector("#number-invalid")
const numberEmpty = document.querySelector("#number-empty")

const monthInput = document.querySelector("#month-el")
const yearInput = document.querySelector("#year-el")
const dateInvalid = document.querySelector("#date-invalid")
const dateEmpty = document.querySelector("#date-empty")

const cvcInput = document.querySelector("#cvc-el")
const cvcInvalid = document.querySelector("#cvc-invalid")
const cvcEmpty = document.querySelector("#cvc-empty")




    form.addEventListener("submit", function(event) {
        event.preventDefault()
        form.classList.add("hidden")
        submitted.classList.add("visible")


    })


    nameInput.addEventListener("blur", function() {
        if(nameInput.checkValidity()) {
            nameInvalid.classList.remove("visible")
            nameInvalid.classList.add("hidden")

        } else {
            nameInvalid.classList.add("visible")
            nameInvalid.classList.remove("hidden")
        }
        
    })
    numberInput.addEventListener("blur", function() {
        if(numberInput.checkValidity()) {
            numberInvalid.classList.remove("visible")
            numberInvalid.classList.add("hidden")

        } else {
            numberInvalid.classList.add("visible")
            numberInvalid.classList.remove("hidden")
        }
        
    })
    monthInput.addEventListener("blur", function() {
        if(monthInput.checkValidity()) {
            dateInvalid.classList.remove("visible")
            dateInvalid.classList.add("hidden")

        } else {
            dateInvalid.classList.add("visible")
            dateInvalid.classList.remove("hidden")
        }
        
    })
    yearInput.addEventListener("blur", function() {
        if(yearInput.checkValidity()) {
            dateInvalid.classList.remove("visible")
            dateInvalid.classList.add("hidden")

        } else {
            dateInvalid.classList.add("visible")
            dateInvalid.classList.remove("hidden")
        }
        
    })
    cvcInput.addEventListener("blur", function() {
        if(cvcInput.checkValidity()) {
            cvcInvalid.classList.remove("visible")
            cvcInvalid.classList.add("hidden")

        } else {
            cvcInvalid.classList.add("visible")
            cvcInvalid.classList.remove("hidden")
        }
        
    })


    nameInput.addEventListener("blur", function() {
        if(nameInput.value.trim() === "") {
            nameEmpty.classList.add("visible")
            nameEmpty.classList.remove("hidden")
            nameInvalid.classList.remove("visible")
            nameInvalid.classList.add("hidden")
        } else {
            nameEmpty.classList.remove("visible")
            nameEmpty.classList.add("hidden")
        }
    })
    numberInput.addEventListener("blur", function() {
        if(numberInput.value.trim() === "") {
            numberEmpty.classList.add("visible")
            numberEmpty.classList.remove("hidden")
            numberInvalid.classList.remove("visible")
            numberInvalid.classList.add("hidden")
        } else {
            numberEmpty.classList.remove("visible")
            numberEmpty.classList.add("hidden")
        }
    })
    monthInput.addEventListener("blur", function() {
        if(monthInput.value.trim() === "") {
            dateEmpty.classList.add("visible")
            dateEmpty.classList.remove("hidden")
            dateInvalid.classList.remove("visible")
            dateInvalid.classList.add("hidden")
        } else {
            dateEmpty.classList.remove("visible")
            dateEmpty.classList.add("hidden")
        }
    })
    yearInput.addEventListener("blur", function() {
        if(yearInput.value.trim() === "") {
            dateEmpty.classList.add("visible")
            dateEmpty.classList.remove("hidden")
            dateInvalid.classList.remove("visible")
            dateInvalid.classList.add("hidden")
        } else {
            dateEmpty.classList.remove("visible")
            dateEmpty.classList.add("hidden")
        }
    })
    cvcInput.addEventListener("blur", function() {
        if(cvcInput.value.trim() === "") {
            cvcEmpty.classList.add("visible")
            cvcEmpty.classList.remove("hidden")
            cvcInvalid.classList.remove("visible")
            cvcInvalid.classList.add("hidden")
        } else {
            cvcEmpty.classList.remove("visible")
            cvcEmpty.classList.add("hidden")
        }
    })


    nameInput.addEventListener("focus", function(){
        if(nameInvalid.classList.contains("visible")) {
            nameInvalid.classList.add("hidden")
            nameInvalid.classList.remove("visible")
        } 
    })
    numberInput.addEventListener("focus", function(){
        if(numberInvalid.classList.contains("visible")) {
            numberInvalid.classList.add("hidden")
            numberInvalid.classList.remove("visible")
        } 
    })
    monthInput.addEventListener("focus", function(){
        if(dateInvalid.classList.contains("visible")) {
            dateInvalid.classList.add("hidden")
            dateInvalid.classList.remove("visible")
        } 
    })
    yearInput.addEventListener("focus", function(){
        if(dateInvalid.classList.contains("visible")) {
            dateInvalid.classList.add("hidden")
            dateInvalid.classList.remove("visible")
        } 
    })
    cvcInput.addEventListener("focus", function(){
        if(cvcInvalid.classList.contains("visible")) {
            cvcInvalid.classList.add("hidden")
            cvcInvalid.classList.remove("visible")
        } 
    })

    nameInput.addEventListener("focus", function(){
        if(nameEmpty.classList.contains("visible")) {
            nameEmpty.classList.add("hidden")
            nameEmpty.classList.remove("visible")
        } 
    })
    numberInput.addEventListener("focus", function(){
        if(numberEmpty.classList.contains("visible")) {
            numberEmpty.classList.add("hidden")
            numberEmpty.classList.remove("visible")
        } 
    })
    monthInput.addEventListener("focus", function(){
        if(dateEmpty.classList.contains("visible")) {
            dateEmpty.classList.add("hidden")
            dateEmpty.classList.remove("visible")
        } 
    })
    yearInput.addEventListener("focus", function(){
        if(dateEmpty.classList.contains("visible")) {
            dateEmpty.classList.add("hidden")
            dateEmpty.classList.remove("visible")
        } 
    })
    cvcInput.addEventListener("focus", function(){
        if(cvcEmpty.classList.contains("visible")) {
            cvcEmpty.classList.add("hidden")
            cvcEmpty.classList.remove("visible")
        } 
    })


    const cvcPlace = document.querySelector(".cvc-place")
    const numberPlace = document.querySelector(".number-place")
    const namePlace = document.querySelector(".name-place")
    const monthPlace = document.querySelector(".month-place")
    const yearPlace = document.querySelector(".year-place")


    cvcInput.addEventListener("input", function() {
        if (cvcInput.value.trim() === "" ) {
            cvcPlace.textContent = "000"
        } else {
            cvcPlace.textContent = cvcInput.value
        }
    })
    numberInput.addEventListener("input", function() {
        if (numberInput.value.trim() === "" ) {
            numberPlace.textContent = "0000 0000 0000 0000"
        } else {
            numberPlace.textContent = numberInput.value
        }
    })
    nameInput.addEventListener("input", function() {
        if (nameInput.value.trim() === "" ) {
            namePlace.textContent = "JANE APPLESEED"
        } else {
            namePlace.textContent = nameInput.value
        }
    })
    monthInput.addEventListener("input", function() {
        if (monthInput.value.trim() === "" ) {
            monthPlace.textContent = "00/00"
        } else {
            monthPlace.textContent = monthInput.value + "/"
        }
    })
    yearInput.addEventListener("input", function() {
        if (yearInput.value.trim() === "" ) {
            yearPlace.textContent = "00/00"
        } else {
            yearPlace.textContent = yearInput.value
        }
    })

