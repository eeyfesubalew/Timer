"use strict";
const container = document.querySelector(".container");
const time = document.querySelector("h2");

const btnStart = document.querySelector(".btn-start");
const btnEnd = document.querySelector(".btn-end");
const btnReset = document.querySelector(".btn-reset");
const timeToString = function (time) {
  let diffInHour = time / 3600000;
  let hour = Math.floor(diffInHour);

  let diffInMin = (diffInHour - hour) * 60;
  let min = Math.floor(diffInMin);

  let diffInSec = (diffInMin - min) * 60;
  let sec = Math.floor(diffInSec);

  let diffInMil = (diffInSec - sec) * 100;
  let mil = Math.floor(diffInMil);

  let formatedHour = hour.toString().padStart(2, 0);
  let formatedMin = min.toString().padStart(2, 0);
  let formatedSec = sec.toString().padStart(2, 0);
  let formatedMil = mil.toString().padStart(2, 0);

  return `${formatedHour}:${formatedMin}:${formatedSec}:${formatedMil}`;
};
let startTime;
let elapsedTime = 0;
let timeInterval;
btnStart.addEventListener("click", function () {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    time.innerHTML = timeToString(elapsedTime);
  }, 10);
  btnStart.classList.add("hide");
  btnEnd.classList.remove("hide");
});
btnEnd.addEventListener("click", function (e) {
  clearInterval(timeInterval);
  time.innerHTML = timeToString(elapsedTime);
  btnStart.classList.remove("hide");
  btnEnd.classList.add("hide");
});

btnReset.addEventListener("click", function () {
  clearInterval(timeInterval);
  elapsedTime = 0;
  time.innerHTML = timeToString(elapsedTime);
  btnStart.classList.remove("hide");
  btnEnd.classList.add("hide");
});
