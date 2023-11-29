// responsive tester

let tester;

export function responsiveTester(form_id) {
    const form = document.getElementById(form_id);

    document.addEventListener("submit", (event) => {
        if (event.target === form) {
            event.preventDefault();
            tester = window.open(
                form.url.value,
                "tester",
                `innerWidth=${form.width.value}, innerHeight=${form.height.value}`
            );
        }
    });

    document.addEventListener("click", (event) => {
        if (event.target === form.close) {
            tester.close();
        }
    });
}
