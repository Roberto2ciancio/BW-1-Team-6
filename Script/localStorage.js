/* nella pagina del benchmark */

let score = 0;  // variabile che contiene il risultato


const submitButton = document.getElementById('submit-quiz')  // prendi Submit Button se esiste

submitButton.addEventListener('click', ()=>{  
    localStorage.setItem('score', score);   // aggiunge event listener che salva la variabile score nel browser
})

/* fine pagina benchmark */




/* nella pagina results */

/* la variabile score si può prendere dal browser in uno di questi due modi: */

/* 1) */
window.onload = (event) => {
    const risultato = localStorage.getItem('score');   //al caricamento della pagina 
}

/* 2) */

window.addEventListener('load', (event) => {
    const risultato = localStorage.getItem('score');   
})

/* fine */