export function responsiveMedia(
    element_id,
    media_query,
    mobile_content,
    desktop_content
) {
    let breakpoint = matchMedia(media_query);

    const responsive = (event) => {
        if (event.matches) {
            document.getElementById(element_id).innerHTML = desktop_content;
        } else {
            document.getElementById(element_id).innerHTML = mobile_content;
        }
    };

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);
}
