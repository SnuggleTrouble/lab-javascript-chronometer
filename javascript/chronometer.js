class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
    if (callback) {
      callback();
    }
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60 / 100);
    return minutes;
  }

  getSeconds() {
    const seconds = Math.floor(this.currentTime / 100 % 60);
    return seconds;
  }

  getMilliseconds() {
    const milliseconds = this.currentTime % 100;
    return milliseconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
