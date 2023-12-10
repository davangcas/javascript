// speech reader function

// SpeechSynthesisUtterance documentation (speech message): https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
// speechSynthesis documentation (speech message): https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
// speechSynthesis.getVoices documentation (voices): https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices

export function speechReader() {
    const $speechSelect = document.getElementById("speech-select");
    const $speechTextarea = document.getElementById("speech-text");
    const $speechButton = document.getElementById("speech-start");
    const speechMessage = new SpeechSynthesisUtterance();

    const voices = [];

    document.addEventListener("DOMContentLoaded", (event) => {
        window.speechSynthesis.addEventListener("voiceschanged", (event) => {
            voices.push(...window.speechSynthesis.getVoices());
            voices.forEach((voice) => {
                const $option = document.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} *** ${voice.lang}`;
                $speechSelect.appendChild($option);
            });
        });
    });

    document.addEventListener("change", (event) => {
        if (event.target === $speechSelect) {
            speechMessage.voice = voices.find(
                (voice) => voice.name === event.target.value
            );
        }
    });

    document.addEventListener("click", (event) => {
        if (event.target === $speechButton) {
            speechMessage.text = $speechTextarea.value;
            window.speechSynthesis.speak(speechMessage);
        }
    });
}
