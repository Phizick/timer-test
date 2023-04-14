const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

//дизейблим кнопку при пустом инпуте
function disableButton() {
  buttonEl.disabled = inputEl.value.length === 0;
}
disableButton();

//формат даты
const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds %= 60;
    minutes %= 60;
    const currentHours = hours.toString().padStart(2,'0');
    const currentMinutes = minutes.toString().padStart(2,'0');
    const currentSeconds = seconds.toString().padStart(2,'0');
    return `${currentHours}:${currentMinutes}:${currentSeconds}`;
};

//анимация таймера
const createTimerAnimator = () => {
  let intervalId = null;
  return (seconds) => {
    clearInterval(intervalId);
    let remainingTime = seconds;
    timerEl.textContent = formatTime(remainingTime);
    intervalId = setInterval(() => {
      remainingTime--;
      timerEl.textContent = formatTime(remainingTime);
      if (remainingTime === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();
// обрабатываем инпут
inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
  disableButton()
});
// обрабатываем кнопку
buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
  disableButton()
});
// кушаем печеньки =)



