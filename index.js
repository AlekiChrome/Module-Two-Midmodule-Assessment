// My SMART Goal is ....

// I will structure my code to pass the cypress test and store the history of the dice into it's accurate div container

const roll = (x) => {
    let dice = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
    let results = '';
    for (let i = 0; i < x; i++) {
        results += dice[Math.floor(Math.random()*6)] + ' ';
    }
    return results;
}

const doRoll = (amount, result) => {
    document.getElementById(result).innerHTML =
        roll(parseInt(document.getElementById(amount).value));
}
