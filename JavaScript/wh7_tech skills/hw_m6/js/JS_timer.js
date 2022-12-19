// цифры таймера
let hourElement = document.querySelector('.hour')
let minuteElement = document.querySelector('.minute')
let secondElement = document.querySelector('.second')
let millisecondElement = document.querySelector('.millisecond')

// Кнопки
let startButton = document.querySelector('.start')
let splitButton = document.querySelector('.split')
let stopButton = document.querySelector('.stop')
let resetButton = document.querySelector('.reset')

//доп переменные
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let interval;

//задачи кнопок при нажатии
startButton.addEventListener('click', () => {
  if (startButton.innerText === 'start') {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
    startButton.innerText = `pause`
    startButton.style.backgroundColor = `#6780D7`
  } else if(startButton.innerText === 'pause') {
   	clearInterval(interval)
    startButton.innerText = `start`
    startButton.style.backgroundColor = `#329F35`
	}
})

splitButton.addEventListener('click', () => {
  let results = document.querySelector('.results')
  let addResult = document.createElement('div')
  addResult.classList.add('split-result')
  addResult.innerText = `Split: ${hour}:${minute}:${second}:${millisecond}`
  results.appendChild(addResult)
})

stopButton.addEventListener('click', () => {
  let results = document.querySelector('.results')
  let addResult = document.createElement('div')
  addResult.classList.add('stop-result')
  addResult.style.color = '#F13C20'
  clearInterval(interval)
  addResult.innerText = `Stop: ${hour}:${minute}:${second}:${millisecond}`
  results.appendChild(addResult)
  clearStart()
})

resetButton.addEventListener('click', () => {
  clearInterval(interval)
  clearTimer()
  clearResults('.results')
  clearStart()
})

function clearStart() {
	if(startButton.innerText === 'pause') {
    startButton.innerText = `start`
    startButton.style.backgroundColor = `#1F6521`
	}
}

function clearTimer() {
  hour = 0
  minute = 0
  second = 0
  millisecond = 0
  hourElement.textContent = '00'
  minuteElement.textContent = '00'
  secondElement.textContent = '00'
  millisecondElement.textContent = '00'
}

function clearResults(element) {
  document.querySelector(element).innerHTML = "";
}


//счет таймера
function startTimer() {
  millisecond++

  //milliseconds
  if (millisecond < 9) {
    millisecondElement.innerText = '0' + millisecond
  } else if (millisecond > 9) {
    millisecondElement.innerText = millisecond
  }
  if (millisecond > 99) {
    second++
    secondElement.innerText = '0' + second
    millisecond = 0
    millisecondElement.innerText = '0' + millisecond
  }

  //seconds
  if (second < 9) {
    secondElement.innerText = '0' + second
  } else if (second > 9) {
    secondElement.innerText = second
  }
  if (second > 60) {
    minute++
    minuteElement.innerText = '0' + minute
    second = 0
    secondElement.innerText = '0' + second
  }

  //minute
  if (minute < 9) {
    minuteElement.innerText = '0' + minute
  } else if (minute > 9) {
    minuteElement.innerText = minute
  }
  if (minute > 60) {
    hour++
    hourElement.innerText = '0' + hour
    minute = 0
    minuteElement.innerText = '0' + minute
  }

  // hour
  if (hour < 9) {
    hourElement.innerText = '0' + hour
  } else if (hour > 9) {
    hourElement.innerText = hour
  }
}