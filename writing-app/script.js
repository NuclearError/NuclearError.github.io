document.addEventListener("DOMContentLoaded", () => {

  const dangerTime = 5000; // How long you can be inactive before it starts to blur (ms)
  const blurTime = 5000; // Additional time with blurry text before writing is lost (ms)

  let writingChallengeDuration;

  const writingArea = document.getElementById("writingArea");
  const timeDisplay = document.getElementById("timeDisplay");
  const timerText = document.getElementById("timer");
  const victoryMessage = document.getElementById("victoryMessage");
  const wordCount = document.getElementById("wordCount");
  const userTimerInput = document.getElementById("timerInput");
  const copyButton = document.getElementById("copyButton");
  const resetButton = document.getElementById("resetButton");
  const startButton = document.getElementById("startButton");

  let inactivityTimeout, reloadTimeout, countdownInterval, startTime;

  let challengeStarted = false;
  let challengeIsRunning = false;

  // Make the timer look human-readable
  const formatTime = (ms) => {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getWordCount = () => {
    const text = writingArea.value.trim();
    return text === "" ? 0 : text.split(/\s+/).length;
  };

  copyToClipboard = () => {
    document.getElementById("writingArea").select();
    const textContent = document.getElementById("writingArea").value;
    navigator.clipboard.writeText(textContent)
      .then(() => console.log('Text copied: ', textContent))
      .catch(err => console.error('Oops! Failed to copy text because of this error:', err));
  }

  const stopTheChallenge = () => {
    clearInterval(countdownInterval);
    challengeIsRunning = false;

    clearTimeout(inactivityTimeout);
    clearTimeout(reloadTimeout);
    writingArea.classList.remove("blurry");

    const finalCount = getWordCount();
    wordCount.textContent = finalCount;
    victoryMessage.style.display = "block";

    startButton.disabled = false;
  }

  // Show remaining challenge time on screen
  const updateTimerDisplay = () => {
    const now = new Date().getTime();
    const elapsed = now - startTime;
    const remaining = writingChallengeDuration - elapsed;

    // Update time 
    timeDisplay.textContent = formatTime(remaining);

    // Remove previous color class
    timerText.classList.remove("red", "orange", "yellow", "green");

    const fraction = elapsed / writingChallengeDuration;

    if (fraction < 0.25) {
      timerText.classList.add("red");
    } else if (fraction < 0.5) {
      timerText.classList.add("orange");
    } else if (fraction < 0.75) {
      timerText.classList.add("yellow");
    } else {
      timerText.classList.add("green");
    }

    if (remaining <= 0) {
      stopTheChallenge();
    }
  };

  const deleteProgress = () => {
    location.reload(); // refresh the page, ie. delete the writing
  }

  const resetTimer = () => {
    if (!challengeIsRunning) return; // do nothing if the challenge is over

    const currentTime = new Date().getTime();

    // If challenge duration has elapsed, don't blur or delete the writing
    if (currentTime - startTime >= writingChallengeDuration) {
      clearTimeout(inactivityTimeout);
      clearTimeout(reloadTimeout);
      return;
    }

    // Reset the timer, ie. stop counting down and don't blur anything
    clearTimeout(inactivityTimeout);
    clearTimeout(reloadTimeout);
    writingArea.classList.remove("blurry");

    inactivityTimeout = setTimeout(() => {
      writingArea.classList.add("blurry");
      reloadTimeout = setTimeout(() => {
        deleteProgress();
      }, blurTime);
    }, dangerTime);
  };

  const setup = () => {
    if (challengeStarted) return;
    challengeStarted = true;

    const inputMinutes = parseFloat(userTimerInput.value);
    writingChallengeDuration = (!isNaN(inputMinutes) && inputMinutes > 0)
      ? inputMinutes * 60 * 1000
      : 5 * 60 * 1000;

    init();
  };

  const init = () => {
    // Start the challenge!
    challengeIsRunning = true;
    startButton.disabled = true;
    startTime = new Date().getTime();
    resetTimer();
    updateTimerDisplay();
    countdownInterval = setInterval(updateTimerDisplay, 500);
  }

  // Set up all the listeners! 

  writingArea.addEventListener("keydown", resetTimer);

  copyButton.addEventListener("click", () => {
    copyToClipboard();
  }, false);

  resetButton.addEventListener("click", () => {
    deleteProgress();
  }, false);

  startButton.addEventListener("click", setup);

  userTimerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") setup();
  });

});