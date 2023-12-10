// User agent

// navigator documentation (MDN): https://developer.mozilla.org/en-US/docs/Web/API/Navigator
// navigator.userAgent documentation (MDN): https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent
// navigator.userAgent.match documentation (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


export function userDeviceInfo(element_id) {
    const element = document.getElementById(element_id);
    const mobile_info = {
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows: () => navigator.userAgent.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    };
    const desktop_info = {
        linux: () => navigator.userAgent.match(/linux/i),
        mac: () => navigator.userAgent.match(/mac os/i),
        windows: () => navigator.userAgent.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        },
    };
    const browser_info = {
        chrome: () => navigator.userAgent.match(/chrome/i),
        safari: () => navigator.userAgent.match(/safari/i),
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera: () => navigator.userAgent.match(/opera|opera mini/i),
        ie: () => navigator.userAgent.match(/msie|iemobile/i),
        edge: () => navigator.userAgent.match(/edge/i),
        any: function () {
            return (
                this.ie() ||
                this.edge() ||
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera()
            );
        },
    };

    element.innerHTML = `
        <ul>
            <li>User Agent: <b>${navigator.userAgent}</b></li>
            <li>Platform: <b>${
                mobile_info.any() ? mobile_info.any() : desktop_info.any()
            }</b></li>
            <li>Browser: <b>${browser_info.any()}</b></li>
        </ul>
    `;

    if (mobile_info.any()) {
        element.innerHTML += `<p><mark>Este contenido solo se ve en dispositivos móviles</mark></p>`;
    }

    if (browser_info.chrome()) {
        element.innerHTML += `<p><mark>Este contenido solo se ve en Google Chrome</mark></p>`;
    }

    if (desktop_info.linux()) {
        element.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
    }
}
