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

// document.addEventListener("DOMContentLoaded", () => {
//     const input = document.querySelector('#number-Dice');
//     const inputNum = Number(input)
//     const diceLanding = document.querySelector('#rollingdice');
//     const p = document.querySelector('#sum-para');

//     let arr = []

//     diceLanding.addEventListener('click', () => {
//         if(input.value !== " "){
//             const dice = [
//                 '⚀ ',
//                 '⚁ ',
//                 '⚂ ',
//                 '⚃ ',
//                 '⚄ ',
//                 '⚅ '
//             ]

//             arr = []
//             const afterRoll = document.querySelector('#landedDice')


//             for(i = 0; i < input.value; i++){
//                 let newArr = dice[Math.ceil(Math.random()* dice.length)]
//                 arr += newArr
//                 afterRoll.textContent = arr
//                 if( afterRoll.textContent !== 0){
//                     p.textContent += inputNum
//                 }
//                 console.log(newArr);
//             }


//             const storedHistory = document.querySelector('#passed-history');
//             const li = document.createElement('li')
//                 li.textContent = arr.value
//                 storedHistory.appendChild(li)
//                  if(afterRoll.textContent == 1){
//                      li.textContent = []
//                  } else if (p.textContent > 1){
//                      li.textContent = li.textContent + afterRoll.textContent
//                  }
//         }
//     })
// })
