import hamburgerMenu from "./a01.js";
import { digitalClock, alarmSound } from "./a02.js";
import { shortcuts, moveBall } from "./a03.js";
import { countdown } from "./a04.js";
import { scrollTop } from "./a05.js";
import { darkModeToogle } from "./a06.js";

document.addEventListener("DOMContentLoaded", (event) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#init-clock", "#stop-clock");
    alarmSound("./Nightcall.mp4", "#init-alarm", "#stop-alarm");
    countdown("#countdown", "November 28 2023 00:00:00", "Congratulations!");
    scrollTop(".scroll-top-btn");
});

document.addEventListener("keydown", (event) => {
    shortcuts(event);
    moveBall(event, ".ball", ".stage");
});

darkModeToogle(".dark-mode-btn", "dark-mode");
