const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId;

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.getMilliseconds();
  milDecElement.innerText = chronometer.computeTwoDigitNumber(milliseconds)[0];
  milUniElement.innerText = chronometer.computeTwoDigitNumber(milliseconds)[1];
}

function printSplit() {
  const splitList = document.createElement("li");
  splitList.innerText = chronometer.split();
  splitsElement.appendChild(splitList);
}

function clearSplits() {
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  if (btnLeftElement.classList = "stop") {
    btnLeftElement.querySelector(".btn.stop")
    chronometer.stop();
    clearInterval(intervalId);
  }
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  if (btnLeftElement.classList = "start") {
    btnLeftElement.querySelector(".btn.start")
    chronometer.start(callback);
  }
}

function setResetBtn() {
  if (btnRightElement.innerText = "RESET") {
    btnRightElement.querySelector(".btn.reset")
    chronometer.reset();
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === "btn start") {
    btnLeftElement.className === "btn stop";
    btnLeftElement.innerText = "STOP";
    btnRightElement.innerText = "SPLIT"
    chronometer.start();
  } else {
    btnLeftElement.className = "btn start";
    btnLeftElement.innerText = "START";
    btnRightElement.innerText = "RESET"
    chronometer.stop();
  }
  intervalId = setInterval(() => {
    printTime();
  }, 1000);
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn reset") {
    btnRightElement.className === "btn split";
    btnRightElement.innerText = "SPLIT";
    chronometer.split();
  } else {
    btnRightElement.className = "btn reset";
    btnRightElement.innerText = "RESET";
    chronometer.reset();
  }
});

