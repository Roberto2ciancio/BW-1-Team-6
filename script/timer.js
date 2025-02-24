/*document.addEventListener('DOMContentLoaded', () => {
    let timeLeft = 61; 
    let countdown;
  countdown = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdown); 
        alert("Il tempo è scaduto!");
      } else {
        timeLeft--;
        document.getElementById('timer').querySelector('span').textContent = timeLeft;
      }
    }, 1000);})*/
    let timeLeft = 61;
let countdown;
const cerchioElement = document.getElementById('cerchio');
const timerElement = document.getElementById('timer').querySelector('span');


function startTimer() {
  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Il tempo è scaduto!");
    } else {
      timeLeft--;
      timerElement.textContent = timeLeft;

      // Calcola la percentuale di tempo rimanente
      const percentage = (timeLeft / 61) * 100;

      // Calcola l'angolo del conic-gradient per svuotare il cerchio
      const angle = (percentage / 100) * 360; // Angolo fino a 360°

      // Aggiorna il cerchio 
      cerchioElement.style.background = `conic-gradient(#4CAF50 ${angle}deg, transparent ${angle}deg)`;
    }
  }, 1000);
}

// Avvia il timer 
document.addEventListener('DOMContentLoaded', () => {
  startTimer();
});


document.getElementById('forSubmit').addEventListener('click', () => {
  location.reload();
});

    
    