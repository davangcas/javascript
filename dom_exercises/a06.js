// Dark mode toogle

export function darkModeToogle(button, dark_class) {
    const dark_mode_element = document.querySelector(button);
    const selectors = document.querySelectorAll("[data-theme]");
    let moon = "🌒";
    let sun = "🌖";

    const darkMode = () => {
        selectors.forEach((element) => {
            element.classList.add(dark_class);
        });
        dark_mode_element.textContent = sun;
    };

    const lightMode = () => {
        selectors.forEach((element) => {
            element.classList.remove(dark_class);
        });
        dark_mode_element.textContent = moon;
    };

    document.addEventListener("click", (event) => {
        if (event.target.matches(button)) {
            if (dark_mode_element.textContent === moon) {
                darkMode();
                localStorage.setItem("dark-mode", "true");
            } else {
                lightMode();
                localStorage.setItem("dark-mode", "false");
            }
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        if (localStorage.getItem("dark-mode") === null) {
            localStorage.setItem("dark-mode", "false");
        }

        if (localStorage.getItem("dark-mode") === "true") {
            darkMode();
        } else {
            lightMode();
        }
    });
}
