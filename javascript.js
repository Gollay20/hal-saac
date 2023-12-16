let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let myTimer;
let myCounter = 0;
let myMinutes = 0;
let mySeconds = 0;

startBtn.addEventListener("click", function () {
  startBtn.disabled = true;

  stopBtn.disabled = false;
  resetBtn.disabled = false;
  myTimer = setInterval(function () {
    myCounter++;
    mySeconds = myCounter;
    seconds.innerHTML = mySeconds;

    //counting seconds.
    if (mySeconds > 59) {
      seconds.innerHTML = "00";
      myCounter = 0;
      myMinutes++;
    } else if (mySeconds > 9) {
      seconds.innerHTML = mySeconds;
    } else {
      seconds.innerHTML = "0" + mySeconds;
    }
    // counting minutes.

    if (myMinutes > 59) {
      clearInterval(myTimer);
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";
      myCounter = 0;
      myMinutes = 0;
      mySeconds = 0;
    } else if (myMinutes > 9) {
      minutes.innerHTML = myMinutes;
    } else {
      minutes.innerHTML = "0" + myMinutes;
    }
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(myTimer);
  startBtn.disabled = false;

  stopBtn.disabled = true;
  resetBtn.disabled = false;
});

resetBtn.addEventListener("click", function () {
  clearInterval(myTimer);
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  myMinutes = 0;
  mySeconds = 0;
  myCounter = 0;

  startBtn.disabled = false;

  stopBtn.disabled = false;
  resetBtn.disabled = true;
});
