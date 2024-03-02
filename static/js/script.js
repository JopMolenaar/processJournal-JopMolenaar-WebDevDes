var output = "";
const nav = document.querySelector("main nav ul");

const makeNav = () => {
    const firstElement = document.querySelector("div h2");
    firstElement.id = firstElement.textContent;
    output +=
        `<li data-heading="h2" ><a href=#${firstElement.textContent}>` +
        firstElement.textContent +
        "</a></li>";
    let nextElement = firstElement.nextElementSibling;
    while (nextElement) {
        if (nextElement.tagName === "H2") {
            nextElement.id = nextElement.textContent;
            output +=
                `<li data-heading="h2" ><a href=#${nextElement.textContent}>` +
                nextElement.textContent +
                "</a></li>";
        } else if (nextElement.tagName === "H3") {
            nextElement.id = nextElement.textContent;
            output +=
                `<li data-heading="h3" ><a href=#${nextElement.textContent}>` +
                nextElement.textContent +
                "</a></li>";
        }
        nextElement = nextElement.nextElementSibling;
    }
    nav.innerHTML = output;
};
makeNav();
