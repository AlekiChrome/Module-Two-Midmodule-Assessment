document.addEventListener("DOMContentLoaded", () => {
    const userChoice = document.querySelector('.dice-input');
    const btnRoll = document.querySelector('.dice-para');

    btnRoll.addEventListener('click', function() {
        const diceHistory = document.createElement('li');
        const listContent = document.createTextNode(userChoice.value);

        diceHistory.appendChild(listContent);

    })

})
