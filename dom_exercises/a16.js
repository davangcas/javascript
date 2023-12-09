// Scroll Spy with Intersection Observer API

export function scrollSpy() {
    const $sections = document.querySelectorAll("section[data-scroll-spy]");
    const instersection_observer_callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document
                    .querySelector(
                        `a[data-scroll-spy][href="#${entry.target.id}"]`
                    )
                    .classList.add("active");
            } else {
                document
                    .querySelector(
                        `a[data-scroll-spy][href="#${entry.target.id}"]`
                    )
                    .classList.remove("active");
            }
        });
    };
    const observer_options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(
        instersection_observer_callback,
        observer_options
    );
    $sections.forEach((element) => observer.observe(element));
}
