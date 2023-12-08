// draw function to get the winner

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
