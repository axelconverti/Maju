const TARGET_DATE = CONFIG.TARGET_DATE;
const SIMULATE_COUNTDOWN_END = CONFIG.SIMULATE_COUNTDOWN_END;

const countdownContainer = document.getElementById('countdown-container');
const mainContent = document.getElementById('main-content');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const countdownBackground = document.querySelector('.countdown-background');


function updateCountdown() {
  const now = new Date().getTime();
  const distance = TARGET_DATE - now;
  
  if (distance <= 0) {
    countdownContainer.classList.add('hidden');
    mainContent.classList.remove('hidden');
    
    clearInterval(countdownInterval);
    return;
  }
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  daysElement.textContent = String(days).padStart(2, '0');
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}

function checkTargetDate() {
  const now = new Date().getTime();
  
  countdownBackground.style.backgroundImage = "url('assets/gifs/ma21.gif')";
  
  if (now >= TARGET_DATE || SIMULATE_COUNTDOWN_END) {
    countdownContainer.classList.add('hidden');
    mainContent.classList.remove('hidden');
    return false;
  }
  
  return true;
}

if (checkTargetDate()) {
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    countdownContainer.classList.add('hidden');
    mainContent.classList.remove('hidden');
  }
});