import hamburgerMenu from "./a01.js";
import { digitalClock, alarmSound } from "./a02.js";
import { shortcuts, moveBall } from "./a03.js";
import { countdown } from "./a04.js";
import { scrollTop } from "./a05.js";
import { darkModeToogle } from "./a06.js";
import { responsiveMedia } from "./a07.js";
import { responsiveTester } from "./a08.js";
import { userDeviceInfo } from "./a09.js";
import { getNetworkStatus } from "./a10.js";
import { webcamDetection } from "./a11.js";
import { getGeolocationContent } from "./a12.js";
import { searchFilters } from "./a13.js";
import { getPlayerWinner } from "./a14.js";
import { sliderComponent } from "./a15.js";
import { scrollSpy } from "./a16.js";
import { smartVideo } from "./a17.js";
import { contactFormValidation } from "./a18.js";
import { speechReader } from "./a19.js";

document.addEventListener("DOMContentLoaded", (event) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#init-clock", "#stop-clock");
    alarmSound("./assets/Nightcall.mp4", "#init-alarm", "#stop-alarm");
    countdown("#countdown", "November 28 2023 00:00:00", "Congratulations!");
    scrollTop(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=5qap5aO4i9A" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "maps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/2QzQF9VhVv5Zb5Lr9" target="_blank" rel="noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.059666095283!2d-99.1675888850951!3d19.42899338688558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb85dd2b7b4c6f3d%3A0x2e1c9b3f6f7a3b9b!2sCalle%20de%20Londres%20105%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1614576661001!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-agent");
    webcamDetection("webcam");
    getGeolocationContent("geolocation");
    searchFilters(".card-filter", ".card");
    getPlayerWinner("#get-winner-button", ".player");
    sliderComponent();
    scrollSpy();
    smartVideo();
    contactFormValidation();
});

document.addEventListener("keydown", (event) => {
    shortcuts(event);
    moveBall(event, ".ball", ".stage");
});

darkModeToogle(".dark-mode-btn", "dark-mode");
getNetworkStatus();
speechReader();
