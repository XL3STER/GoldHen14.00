/* Fully automatic - GoldHEN */

var AUTOSTART_SECONDS = 5;
var countEl = document.getElementById("count");
var ticker = null;

function start() {
  stopClock();
  location.href = "jb.html?log=1&afterglow=run&mode=goldhen";
}

function stopClock() {
  if (ticker !== null) {
    clearInterval(ticker);
    ticker = null;
  }
}

function startClock() {
  var left = AUTOSTART_SECONDS;
  countEl.textContent = "starting in " + left + "s";
  ticker = setInterval(function () {
    left -= 1;
    if (left <= 0) {
      start();
      return;
    }
    countEl.textContent = "starting in " + left + "s";
  }, 1000);
}

var DONE = false;
try {
  DONE = new URLSearchParams(location.search).get("afterglow") === "done";
} catch (e) {}

if (DONE) {
  countEl.textContent = "kernel already patched";
} else {
  startClock();
}
