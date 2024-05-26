function distributeBlocks() {
    const ul = document.querySelector("ul");
    const lis = ul.querySelectorAll("li");

    const containerWidth = 51; // in em
    const containerHeight = 65; // in em
    const blockWidth = 10; // in em
    const blockHeight = 12; // in em
    const numBlocks = lis.length;

    // Calculate number of rows and columns
    let columns = Math.floor(containerWidth / blockWidth);
    let rows = Math.ceil(numBlocks / columns);

    // Adjust rows if there are too many
    while ((rows - 1) * columns >= numBlocks) {
        rows--;
    }

    // Calculate gaps to ensure outer blocks are against the container's walls
    const gapX = (containerWidth - columns * blockWidth) / (columns - 1);
    const gapY = (containerHeight - rows * blockHeight) / (rows - 1);

    // Place blocks
    lis.forEach((li, index) => {
        const col = index % columns;
        const row = Math.floor(index / columns);

        const left = col * (blockWidth + gapX);
        const top = row * (blockHeight + gapY);

        li.style.left = `${left}em`;
        li.style.top = `${top}em`;
    });
}

// distributeBlocks();

const list = document.querySelector("ul");

window.onmousemove = (e) => {
    const mouseX = e.clientX,
        mouseY = e.clientY;

    const maxX = list.offsetWidth - window.innerWidth,
        maxY = list.offsetHeight - window.innerHeight;

    const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

    const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

    list.animate(
        {
            transform: `translate(${panX}px, ${panY}px)`,
        },
        {
            duration: 4000,
            fill: "forwards",
            easing: "ease",
        }
    );

    // list.styles.transform = translate(`${panX}px, ${panY}px`)
};
