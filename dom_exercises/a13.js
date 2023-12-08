// seach filters

export function searchFilters(input, selector) {
    document.addEventListener("keyup", (event) => {
        if (event.target.matches(input)) {
            if (event.key === "Escape") {
                event.target.value = "";
            }

            document.querySelectorAll(selector).forEach((element) => {
                element.textContent.toLowerCase().includes(event.target.value)
                    ? element.classList.remove("hidden")
                    : element.classList.add("hidden");
            });
        }
    });
}
