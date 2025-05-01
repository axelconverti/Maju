const CONFIG = {
  TARGET_DATE: new Date('May 1, 2025 00:00:00').getTime(),
  
  SIMULATE_COUNTDOWN_END: false,
  
  ANIMATION_DURATIONS: {
    resultLoading: 2000,
    noButtonMessage: 3000   
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
