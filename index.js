const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; //ИСПОЛЬЗУЙ ФУНКЦИЮ ДЛЯ ГЕНЕРАЦИИ СЛУЧАЙНОГО ЧИСЛА

const refs = {
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
};

changeColorFn = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = color;
};

let interval = null;

refs.startButton.addEventListener("click", () => {
  interval = setInterval(() => changeColorFn(), 1000);
  refs.startButton.disabled = true;
});

refs.stopButton.addEventListener("click", () => {
  clearInterval(interval);
  refs.startButton.disabled = false;
});
