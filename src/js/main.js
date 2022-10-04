const selected = document.querySelector(".selected");
const selectedText = document.querySelector(".selected span");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
    o.addEventListener("click", () => {
        selectedText.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
};