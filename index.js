document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('#number-Dice');
    const inputNum = Number(input)
    const diceLanding = document.querySelector('#rollingdice');
    const p = document.querySelector('#sum-para');

    let arr = []

    diceLanding.addEventListener('click', () => {
        if(input.value !== " "){
            const dice = [
                '⚀',
                '⚁',
                '⚂',
                '⚃',
                '⚄',
                '⚅'
            ]

            arr = []
            const afterRoll = document.querySelector('#landedDice')


            for(i = 0; i < input.value; i++){
                let newArr = dice[Math.floor(Math.random()* 6) + 1]
                arr += Number[newArr]
                afterRoll.innerHTML = arr[newArr]
                if( afterRoll.textContent !== 0){
                    p.textContent += inputNum + `Roll`
                }
                console.log(arr)
            }

            const storedHistory = document.querySelector('#passed-history');
            const li = document.createElement('li')
                li.textContent = arr.value
                storedHistory.appendChild(li)
                 if(afterRoll.textContent == 1){
                     li.textContent = []
                 }else if(p.textContent > 1){
                     li.textContent = li.textContent + afterRoll.textContent
                 }
        }
    })
})
