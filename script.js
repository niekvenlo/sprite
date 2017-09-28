window.onload = () => {
  // Initialize
  let currentTick = 0;

  // Grab DOM elements
  const coins = [...document.getElementsByClassName('jsCoin')];

  /**
  * Global tick handler
  */
  function tick() {
    let now = window.performance.now();
    console.log(now);
    currentTick++;
    tickCoins();
  }
  setInterval(tick, 15);

  /**
   * Handles coin ticks
   */
  function tickCoins() {
    coins.forEach((coin) => {
      if (currentTick % 6 !== 0) return;
      if (Math.random() < 0.001) return;
      const currentPosition = parseInt(coin.style.backgroundPosition) || 0;
      coin.style.backgroundPosition = currentPosition + 100 + 'px';
    });
  }
};
