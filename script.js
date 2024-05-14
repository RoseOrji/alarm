let minuteEl = document.getElementById("minute");
let secondEl = document.getElementById("seconds");

function startStopWatch() {
    let displayEl = document.getElementById("timerDisplay");
    let min = Number( minuteEl.value);
    let sec =  Number( secondEl.value);

    let interval = setInterval(() => {
    if (sec == 0) {
        min--;
        sec = 60;
    }
    sec --;

    displayEl.innerHTML = `${min < 10 ? "0" + min : min } : 
                            ${sec < 10 ? "0" + sec : sec}`



    if (sec == 0 && min == 0) {
        clearInterval(interval);
        let myAudio = document.querySelector('#audio')
        myAudio.play()
        
    }

    minuteEl.value = ""
    secondEl.value = ""

}, 1000)

 }