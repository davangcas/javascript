// form validations with javascript

// RegExp documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// RegExp.exec documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
// RegExp.test documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

export function contactFormValidation() {
    const $form = document.querySelector(".contact-form");
    const $inputs = document.querySelectorAll(".contact-form [required]");

    $inputs.forEach((input) => {
        const $span = document.createElement("span");
        $span.id = `${input.name}Error`;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "display-none");
        input.insertAdjacentElement("afterend", $span);
    });

    document.addEventListener("keyup", (event) => {
        if (event.target.matches(".contact-form [required]")) {
            let $input = event.target;
            let pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? document
                          .getElementById(`${$input.name}Error`)
                          .classList.add("is-active")
                    : document
                          .getElementById(`${$input.name}Error`)
                          .classList.remove("is-active");
            }

            if (!pattern) {
                return $input.value === ""
                    ? document
                          .getElementById(`${$input.name}Error`)
                          .classList.add("is-active")
                    : document
                          .getElementById(`${$input.name}Error`)
                          .classList.remove("is-active");
            }
        }
    });

    document.addEventListener("submit", (event) => {
        event.preventDefault();
        const $loader = document.querySelector(".contact-form-loader");
        const $response = document.querySelector(".contact-form-response");

        $loader.classList.remove("hidden");

        setTimeout(() => {
            $loader.classList.add("hidden");
            $response.classList.remove("hidden");
            $form.reset();

            setTimeout(() => {
                $response.classList.add("hidden");
            }, 1000);
        }, 3000);
    });
}
