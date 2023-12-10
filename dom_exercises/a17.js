// smart video player

// IntersectionObserver: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver

export function smartVideo() {
    const $smart_videos = document.querySelectorAll("video[data-smart-video]");
    const observer_callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

            window.addEventListener("visibilitychange", (event) => {
                document.visibilityState === "visible"
                    ? entry.target.play()
                    : entry.target.pause();
            });
        });
    };
    const observer_options = {
        threshold: 0.5,
    };
    const observer = new IntersectionObserver(
        observer_callback,
        observer_options
    );
    $smart_videos.forEach((element) => observer.observe(element));
}
