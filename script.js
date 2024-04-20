
let timer = null;

function startScroll() {
  const input = document.getElementById('message');
  if (timer === null) {
    timer = setInterval(() => {
      let text = input.value;
      text = text.substring(1) + text.substring(0, 1);
      input.value = text;
    }, 200); 
  }
}

function stopScroll() {
  clearInterval(timer);
  timer = null;
}

window.onload = () => {
  document.getElementById('startButton').addEventListener('click', startScroll);
  document.getElementById('stopButton').addEventListener('click', stopScroll);
};