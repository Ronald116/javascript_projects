const minLabel = document.querySelector("#minutes");
const secLabel = document.querySelector("#seconds");
const millisecLabel = document.querySelector("#milliseconds");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

const lapLists = document.querySelector("#lapLists");

//stopwatch variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(updateTimer, 10)
    startBtn.disabled = true;
}

function stopTimer() {
    clearInterval(interval);
    addToLapLists();
    resetTimer();
    startBtn.disabled = false;
}

function pauseTimer() {
    clearInterval(interval);
    pauseBtn.disabled = true;
    startBtn.disabled = false;
    if (startBtn) {
        pauseBtn.disabled = false;
    }
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
    startBtn.disabled = false;
}

function updateTimer() {
    milliseconds++;
    
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer() {
    millisecLabel.textContent = padTime(milliseconds);
    secLabel.textContent = padTime(seconds);
    minLabel.textContent = padTime(minutes);
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function addToLapLists() {
    const lapTime = `${padTime(minutes)}: ${padTime(seconds)}: ${padTime(milliseconds)}`;

    const listItem = document.createElement("li");

    listItem.innerHTML = `<span>Lap ${lapLists.childElementCount + 1}: </span>${lapTime}`;
    lapLists.appendChild(listItem);
}