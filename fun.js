/*
 STEPS

1. Use event listener to get number or calc BTNS
2. Create 3 Vars to store Strings
3. Create math functions to convert strings and proform math
--- Notes:
wire functions to " = " button

*/

/* --- Start of Program Code --- */

// Calculater Screen 
let calcWin = document.getElementById('calc-screen');
//Calculator
const numbers = document.querySelectorAll('.numjs');
const calcs = document.querySelectorAll('.calcs');

parseFloat(calcWin)

numbers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let targ = e.target;
        console.log(targ);
        if (calcWin.innerText == 0) {
            calcWin.innerText = targ.innerText;
        } else {
            calcWin.innerText += targ.innerText;
        }
        if (targ.innerText === ".") {
            targ.disabled = true;
        }
    })
});

calcs.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let targ = e.target;
        console.log(targ);
        const period = document.getElementById('period');
        if (targ.innerText === "C") {
            period.disabled = false;
            calcWin.innerText = 0;
        }
        if (targ.innerText === "ac") {
            calcWin.innerText = 0;
            period.disabled = false;
        }
    })
});