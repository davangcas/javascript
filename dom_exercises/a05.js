// Scroll to top button
// scrollTo documentation: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo

export function scrollTop(button) {
    const scroll_element = document.querySelector(button);

    window.addEventListener("scroll", () => {
        let scroll_y = pageYOffset || document.documentElement.scrollTop;

        if (scroll_y > 600) {
            scroll_element.classList.remove("hidden");
        } else {
            scroll_element.classList.add("hidden");
        }
    });

    document.addEventListener("click", (event) => {
        if (event.target.matches(button)) {
            scrollTo({
                top: 0,
                behavior: "smooth",
            });
            scroll_element.classList.add("hidden");
        }
    });
}
