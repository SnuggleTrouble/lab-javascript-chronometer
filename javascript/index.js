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

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minUni = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  const minDec = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = minUni;
  minDecElement.innerHTML = minDec;
// My attempt
/*   let minutes = chronometer.getMinutes();
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1]; */
}

function printSeconds() {
  const secUni = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  const secDec = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = secUni;
  secDecElement.innerHTML = secDec;

// My attempt
/*   let seconds = chronometer.getSeconds();
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1]; */
}

function resetTime () {
  minUniElement.innerHTML = "0";
  minDecElement.innerHTML = "0";
  secUniElement.innerHTML = "0";
  secDecElement.innerHTML = "0";
  milUniElement.innerHTML = "0";
  milDecElement.innerHTML = "0";
  chronometer.reset();
}

// ==> BONUS
function printMilliseconds() {
  const milUni = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];
  const milDec = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
  milUniElement.innerHTML = milUni;
  milDecElement.innerHTML = milDec;

  // My attempt
/*   let milliseconds = chronometer.getMilliseconds();
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(milliseconds)[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(milliseconds)[1]; */
}

function printSplit() {
  const splitTime = document.createElement("li");
  splitTime.innerHTML = chronometer.split();
  splitsElement.append(splitTime);
// My attempt
  /*   const splitList = document.createElement("li");
  splitList.innerHTML = chronometer.split();
  splitsElement.appendChild(splitList); */
}

function clearSplits() {
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP";
// My attempt
  /*   if (btnLeftElement.classList = "stop") {
    btnLeftElement.querySelector(".btn.stop")
    chronometer.stop();
    clearInterval(intervalId);
  } */
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT";
// My attempt
  /*   printSplit(); */
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START";
// My attempt
  /*   if (btnLeftElement.classList = "start") {
    btnLeftElement.querySelector(".btn.start")
    chronometer.start(callback);
  } */
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET";
// My attempt
  /*   if (btnRightElement.innerHTML = "RESET") {
    btnRightElement.querySelector(".btn.reset")
    chronometer.reset();
  } */
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");
  btnRightElement.classList.toggle("split");
  btnRightElement.classList.toggle("reset");
  if (btnLeftElement.innerHTML === "STOP") {
    chronometer.stop();
    btnLeftElement.innerHTML = "START";
    btnRightElement.innerHTML = "RESET";
  } else {
    chronometer.start(printTime);
    btnLeftElement.innerHTML = "STOP";
    btnRightElement.innerHTML = "SPLIT";
  }
});

// My attempt
  /*   if (btnLeftElement.className === "btn start") {
    btnLeftElement.className === "btn stop";
    btnLeftElement.innerHTML = "STOP";
    btnRightElement.innerHTML = "SPLIT"
    chronometer.start();
  } else {
    btnLeftElement.className = "btn start";
    btnLeftElement.innerHTML = "START";
    btnRightElement.innerHTML = "RESET"
    chronometer.stop();
  }
  intervalId = setInterval(() => {
    printTime();
  }, 1000); */


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === "SPLIT") printSplit();
  if (btnRightElement.innerHTML === "RESET") {
    clearSplits();
    resetTime();
  };
});

  // My attempt
  /*   if (btnRightElement.className === "btn reset") {
    btnRightElement.className === "btn split";
    btnRightElement.innerHTML = "SPLIT";
    chronometer.split();
  } else {
    btnRightElement.className = "btn reset";
    btnRightElement.innerHTML = "RESET";
    chronometer.reset();
  } */
