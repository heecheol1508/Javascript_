const greetingForm = document.querySelector(".js-greetingForm");
const nameInput = greetingForm.querySelector("input");
const greetings = document.querySelector(".js-greetings");
const username = document.querySelector(".js-name");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  username.innerText = `${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
