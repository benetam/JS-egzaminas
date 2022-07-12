/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let counter = 0;
// const display = document.getElementById('btn_state');

// document.getElementById('btn__element').addEventListener('click', () => {
//     counter++;
//     document.getElementById('btn_state').innerHTML = counter;
//     // display.innerText = counter;
// });
let btn = document.getElementById('btn__element');
btn.addEventListener('click', function(){
    counter++;
    document.getElementById('btn_state').innerHTML = counter; 
});