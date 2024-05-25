const background = document.querySelector(".backgroundImage");
let activeIndex = -1;

// Get all navigation links and add mouseover event listeners
Array.from(document.querySelectorAll("main section:nth-of-type(1) nav a")).forEach((item, index) => {
    item.onmouseover = () => {
        const currentBackgroundPosition = window.getComputedStyle(background).getPropertyValue("background-position-y");
        const currentPositionPercentage = parseFloat(currentBackgroundPosition);

        if (!isNaN(currentPositionPercentage)) {
            if (activeIndex > index) {
                // Decrease background position by 10%
                const newPosition = currentPositionPercentage - 20;
                background.style.backgroundPositionY = `${newPosition}%`;
            } else if (activeIndex < index) {
                // Increase background position by 10%
                const newPosition = currentPositionPercentage + 20;
                background.style.backgroundPositionY = `${newPosition}%`;
            }
        }
        // Update activeIndex to current index
        activeIndex = index;
    };
});
