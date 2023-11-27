// keyboard events
let x = 0;
let y = 0;

export function moveBall(event, ball, stage) {
    const ballElement = document.querySelector(ball);
    const stageElement = document.querySelector(stage);
    const limitsBall = ballElement.getBoundingClientRect();
    const limitsStage = stageElement.getBoundingClientRect();

    switch (event.keyCode) {
        case 38:
            if (limitsBall.top > limitsStage.top) {
                event.preventDefault();
                y--;
            }
            break;
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                event.preventDefault();
                y++;
            }
            break;
        case 37:
            event.preventDefault();

            if (limitsBall.left > limitsStage.left) {
                x--;
            }
            break;
        case 39:
            event.preventDefault();

            if (limitsBall.right < limitsStage.right) {
                x++;
            }
            break;
        default:
            break;
    }

    ballElement.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(event) {
    if (event.type == "keydown" && event.key == "a" && event.altKey) {
        alert("Launched an alert with the keyboard");
    }

    if (event.type == "keydown" && event.key == "c" && event.altKey) {
        confirm("Launched a confirmation with the keyboard");
    }

    if (event.type == "keydown" && event.key == "p" && event.altKey) {
        prompt("Launched a prompt with the keyboard");
    }
}
