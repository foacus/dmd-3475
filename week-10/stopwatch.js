let seconds = 0

let ref = null;

let btn1 = document.getElementById('startbutton')
let btn2 = document.getElementById('stopbutton')
let btn3 = document.getElementById('resetbutton')
let number = document.querySelector('#number')


btn1.addEventListener('click', function(){
    if(ref === null){
        ref = setInterval(function startTimer(){
            seconds = seconds + 1;
            number.innerText = seconds;
            }, 1000)
    }
    console.log("Timer Started")
})

btn2.addEventListener('click', function(){
    clearInterval(ref);
    ref = null;
    console.log("Timer Stopped")
})

btn3.addEventListener('click', function(){
    clearInterval(ref);
    ref = null;
    seconds = 0;
    number.innerText = seconds;
    console.log("Timer Reset")
})