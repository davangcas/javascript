import hamburgerMenu from "./a01.js";
import { digitalClock, alarmSound } from "./a02.js";
import { shortcuts, moveBall } from "./a03.js";

document.addEventListener("DOMContentLoaded", (event) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#init-clock", "#stop-clock");
    alarmSound("./Nightcall.mp4", "#init-alarm", "#stop-alarm");
});

document.addEventListener("keydown", (event) => {
    shortcuts(event);
    moveBall(event, ".ball", ".stage");
});
