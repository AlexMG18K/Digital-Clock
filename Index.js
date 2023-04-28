function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    
    document.querySelector('.hour').textContent = hours;
    document.querySelector('.minute').textContent = minutes;
    document.querySelector('.second').textContent = seconds;
  }
  
  setInterval(updateClock, 1000);