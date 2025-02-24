const buttons = document.querySelectorAll('input[type="button"]'); 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const answerSelected = button.getAttribute('data-answer'); 
        const resultElement = document.querySelector('.result'); 
        resultElement.textContent += " Risposta selezionata: " + answerSelected + "; "; 
    });
});
