let timeInSeconds = 2 * 60; // Time in seconds

function updateTimer() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  // Formatting time as MM:SS
  const formattedTime = minutes + ":" + seconds;

  // Update the timer Element
  const timerElement = document.getElementById("timer");
  timerElement.innerText = formattedTime;

  // Decrement the time
  timeInSeconds--;

  // Check if the timer has reached 0
  if (timeInSeconds < 0) {
    clearInterval(timerInterval);
    alert("boom!!!");
  }
}

const timerInterval = setInterval(updateTimer, 1000);
