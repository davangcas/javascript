// clock functionality

export function digitalClock(clock, play_button, stop_button) {
    let clockTemp;

    document.addEventListener("click", (event) => {
        if (event.target.matches(play_button)) {
            clockTemp = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                document.querySelector(
                    clock
                ).innerHTML = `<h3>${clockHour}</h3>`;
            }, 500);
            event.target.disabled = true;
        }

        if (event.target.matches(stop_button)) {
            clearInterval(clockTemp);
            document.querySelector(clock).innerHTML = null;
            document.querySelector(play_button).disabled = false;
        }
    });
}

export function alarmSound(sound, play_button, stop_button) {
    const alarm = document.createElement("audio");
    let alarmTemp;

    alarm.src = sound;

    document.addEventListener("click", (event) => {
        if (event.target.matches(play_button)) {
            event.target.disabled = true;

            alarmTemp = setTimeout(() => {
                alarm.play();
            }, 200);
        }

        if (event.target.matches(stop_button)) {
            clearTimeout(alarmTemp);
            alarm.pause();
            alarm.currentTime = 0;
            document.querySelector(play_button).disabled = false;
        }
    });
}
