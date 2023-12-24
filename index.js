const display = document.querySelector('.show-text');
const button = document.querySelector('.text-btn');

button.addEventListener('click',function(){
    let textinput = document.querySelector('#text-input');
    inputvalue = textinput.value;
    display.innerHTML = inputvalue;
    textinput.value = '';
})

const decrement = document.querySelector('.decrement');
const increment = document.querySelector('.increment');
const display2 = document.querySelector('.display-num');

let number = 0;
increment.addEventListener("click", function(){
    number = number + 1;
    display2.innerHTML = number;
})

decrement.addEventListener("click", function(){
    number = number - 1;
    display2.innerHTML = number;
})