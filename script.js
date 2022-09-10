let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let lapButton = document.getElementById("lap");
let lapDisplay = document.getElementById("display");
let average = document.getElementById("average");

let lap = [];
let avgMin = avgSec = avgMs = 0;
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let mSecond = document.getElementById("mSecond");
let interval;
let hr = min = sec = ms = "0" + 0;

startButton.addEventListener("click", () => {
  interval = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }

    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }

    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    displayTime();
  }, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  average.style.display = "none";
  lapDisplay.style.display = "none";
  hr = min = sec = ms = "0" + 0;
  lap = [];
  console.log(lap);
  displayTime();
});

lapButton.addEventListener("click", () => {
  average.style.display = "block";
  lapDisplay.style.display = "block";
  let value = `${min} : ${sec} : ${ms}`;
  lap.push(value);
  let temp = document.createElement("p");
  temp.innerHTML = value;
  document.getElementsByClassName("lap-display")[0].appendChild(temp);
});

average.addEventListener("click", () => {
  let Average;
  let n = lap.length;
  lap.forEach((item) => {
    let temp = item.split(":");
    avgMin += parseInt(temp[0]);
    avgSec += parseInt(temp[1]);
    avgMs += parseInt(temp[2]);
  });
  Average = `${Math.floor(avgMin / n)} : ${Math.floor(avgSec/n)} : ${Math.floor(avgMs/n)}`
  alert("Your average Time of the Lap is " + Average);
  console.log(Average);
});
function displayTime() {
  minute.innerHTML = min;
  second.innerHTML = sec;
  mSecond.innerHTML = ms;
}
