// hamburguer menu

export default function hamburgerMenu(button, menu, link) {
    document.addEventListener("click", (event) => {
        if (
            event.target.matches(button) ||
            event.target.matches(`${button} *`)
        ) {
            document.querySelector(menu).classList.toggle("active");
            document.querySelector(button).classList.toggle("is-active");
        }

        if (event.target.matches(link) || event.target.matches(`${link} *`)) {
            document.querySelector(menu).classList.remove("active");
            document.querySelector(button).classList.remove("is-active");
        }
    });
}
