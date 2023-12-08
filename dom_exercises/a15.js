// responsive slider

export function sliderComponent() {
    const $next_button = document.querySelector(".slider-buttons .next-slide");
    const $previous_button = document.querySelector(
        ".slider-buttons .previous-slide"
    );
    const $slides = document.querySelectorAll(".slider-slide");
    let iterator = 0;

    document.addEventListener("click", (event) => {
        if (event.target === $next_button) {
            event.preventDefault();
            $slides[iterator].classList.remove("active");
            iterator++;

            if (iterator >= $slides.length) {
                iterator = 0;
            }

            $slides[iterator].classList.add("active");
        }

        if (event.target === $previous_button) {
            event.preventDefault();
            $slides[iterator].classList.remove("active");
            iterator--;

            if (iterator < 0) {
                iterator = $slides.length - 1;
            }

            $slides[iterator].classList.add("active");
        }
    });
}
