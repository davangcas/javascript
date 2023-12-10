// draw function to get the winner

// Math object documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Math.floor documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// Math.random documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

export function getPlayerWinner(button, selector) {
    const getWinner = (selector) => {
        const $players = document.querySelectorAll(selector);
        const random = Math.floor(Math.random() * $players.length);
        const winner = $players[random];

        return `The winner is: ${winner.textContent}`;
    };

    document.addEventListener("click", (event) => {
        if (event.target.matches(button)) {
            let winner_result = getWinner(selector);
            alert(winner_result);
        }
    });
}
