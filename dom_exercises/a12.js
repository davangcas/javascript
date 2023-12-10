// Geolocation

// navigator.geolocation object: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
// navigator.geolocation.getCurrentPosition: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

export function getGeolocationContent(element_id) {
    const $element_container = document.getElementById(element_id);
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const success_function = (position) => {
        const coords = position.coords;

        $element_container.insertAdjacentHTML(
            "beforebegin",
            `<p><mark>Latitud:</mark> ${coords.latitude}</p>
            <p><mark>Longitud:</mark> ${coords.longitude}</p>
            <p><mark>Presición:</mark> ${coords.accuracy} metros</p>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},14z" target="_blank" rel="noopener">Ver en Google Maps</a>
            `
        );
    };

    const error_function = (error) => {
        $element_container.insertAdjacentHTML(
            "beforebegin",
            `<p><mark>${error.code} - ${error.message}</mark></p>`
        );
        console.error(
            `Sucedio el siguiente error: ${error.code} - ${error.message}`
        );
    };

    navigator.geolocation.getCurrentPosition(
        success_function,
        error_function,
        options
    );
}
