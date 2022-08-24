const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let intervalId = null;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  intervalId = setInterval(changeColor, 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function changeColor() {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  console.log(color);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
