var output = "";
const nav = document.querySelector("main nav ul");

const makeNav = () => {
    const firstElement = document.querySelector("div h2");
    const text = firstElement.textContent.replace(/\s+/g, "-");
    firstElement.id = text;
    output += `<li data-heading="h2" ><a href=#${text}>` + firstElement.textContent + "</a></li>";
    let nextElement = firstElement.nextElementSibling;
    while (nextElement) {
        if (nextElement.tagName === "H2") {
            const text = nextElement.textContent.replace(/\s+/g, "-");
            nextElement.id = text;
            output += `<li data-heading="h2" ><a href=#${text}>` + nextElement.textContent + "</a></li>";
        } else if (nextElement.tagName === "H3") {
            const text = nextElement.textContent.replace(/\s+/g, "-");
            nextElement.id = text;
            output += `<li data-heading="h3" ><a href=#${text}>` + nextElement.textContent + "</a></li>";
        }
        nextElement = nextElement.nextElementSibling;
    }
    nav.innerHTML = output;
};
makeNav();
