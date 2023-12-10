// webcamDetection ("webcam");

// navigator.mediaDevices: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
// navigator.mediaDevices.getUserMedia: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

export function webcamDetection(element_id) {
    const $video = document.getElementById(element_id);
    console.log(navigator.mediaDevices.getUserMedia);

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                $video.srcObject = stream;
                $video.play();
            })
            .catch((error) => {
                $video.insertAdjacentHTML(
                    "beforebegin",
                    `<p><mark>${error}</mark></p>`
                );
                console.error(`Sucedio el siguiente error: ${error}`);
            });
    }
}
