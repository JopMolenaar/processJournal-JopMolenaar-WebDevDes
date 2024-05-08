const button = document.querySelector("button.openCloseNav");
const body = document.querySelector("body");
const classToAdd = "nav-open";

button.addEventListener("click", () => {
    body.classList.toggle(classToAdd);
});
