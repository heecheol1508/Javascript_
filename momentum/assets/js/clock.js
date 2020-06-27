const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const hello = document.querySelector(".js-hello");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  if (hours < 12) {
    hello.innerText = "Good morning, ";
  } else {
    hello.innerText = "Good afternoon, ";
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
