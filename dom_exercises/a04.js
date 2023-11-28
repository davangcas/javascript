export function countdown(element_id, limit_date, message) {
    const countdown_element = document.querySelector(element_id);
    const limit_time = new Date(limit_date).getTime();

    let countdown_tempo = setInterval(() => {
        let now = new Date().getTime();
        let limit = limit_time - now;
        let days_factor = 24 * 60 * 60 * 1000;
        let hours_factor = 60 * 60 * 1000;
        let minutes_factor = 60 * 1000;

        let days = Math.floor(limit / days_factor);
        let hours = Math.floor(
            (limit % days_factor) / hours_factor
        );
        let minutes = Math.floor((limit % hours_factor) / minutes_factor);
        let seconds = Math.floor((limit % minutes_factor) / 1000);

        countdown_element.innerHTML = `<h3>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</h3>`;

        if (limit < 0) {
            clearInterval(countdown_tempo);
            countdown_element.innerHTML = `${message}`;
        }
    }, 1000);
}
