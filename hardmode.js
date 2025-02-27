const questionsJavaScriptHard = [
    {
        category: "Programming: JavaScript",
        type: "boolean",
        difficulty: "hard",
        question: "In JavaScript, `null == undefined` restituisce `true`.",
        correct_answer: "True",
        incorrect_answers: ["False"],
    },
    {
        category: "Programming: JavaScript",
        type: "multiple",
        difficulty: "hard",
        question: "Qual è l'output del seguente codice: `console.log(1 + - + + + - + 1)`?",
        correct_answer: "2",
        incorrect_answers: ["0", "1", "-2"],
    },
    {
        category: "Programming: JavaScript",
        type: "boolean",
        difficulty: "hard",
        question: "In JavaScript, le chiusure consentono a una funzione interna di accedere alle variabili della funzione esterna anche dopo che la funzione esterna è terminata.",
        correct_answer: "True",
        incorrect_answers: ["False"],
    },
    {
        category: "Programming: JavaScript",
        type: "multiple",
        difficulty: "hard",
        question: "Qual è l'output del seguente codice: `console.log(([])+(![]+[]+[]))`?",
        correct_answer: "false",
        incorrect_answers: ["true", "undefined", "error"],
    },
    {
        category: "Programming: JavaScript",
        type: "boolean",
        difficulty: "hard",
        question: "In JavaScript, `NaN === NaN` restituisce `true`.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Programming: JavaScript",
        type: "multiple",
        difficulty: "hard",
        question: "Quale metodo di `Array` è più efficiente per rimuovere elementi dall'inizio dell'array?",
        correct_answer: "shift()",
        incorrect_answers: ["splice()", "slice()", "pop()"],
    },
    {
        category: "Programming: JavaScript",
        type: "boolean",
        difficulty: "hard",
        question: "In JavaScript, l'operatore `typeof null` restituisce 'null'.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Programming: JavaScript",
        type: "multiple",
        difficulty: "hard",
        question: "Qual è l'output del seguente codice: `console.log(typeof NaN)`?",
        correct_answer: "number",
        incorrect_answers: ["NaN", "undefined", "object"],
    },
    {
        category: "Programming: JavaScript",
        type: "boolean",
        difficulty: "hard",
        question: "In JavaScript, le promesse possono essere risolte o rifiutate solo una volta.",
        correct_answer: "True",
        incorrect_answers: ["False"],
    },
    {
        category: "Programming: JavaScript",
        type: "multiple",
        difficulty: "hard",
        question: "Qual è l'output del seguente codice: `console.log(0.1 + 0.2 === 0.3)`?",
        correct_answer: "false",
        incorrect_answers: ["true", "undefined", "error"],
    },
];

let currentQuestionIndex = 0;
let selectedAnswers = [];
let correctAnswersCount = 0;
let timeLeft = 60;
let countdown;
const cerchioElement = document.getElementById('cerchio');
const timerElement = document.getElementById('timer').querySelector('span');
let selectedIndex = -1;

// DOMANDE
function displayQuestion() {
    const question = questionsJavaScriptHard[currentQuestionIndex];
    document.getElementById("question").textContent = `${question.question}`;
    document.getElementById("score").textContent = `${currentQuestionIndex + 1}`;

    const allAnswers = [...question.incorrect_answers, question.correct_answer];

    if (question.type === "boolean") {
        document.getElementById(`answer0`).value = allAnswers[0];
        document.getElementById(`answer1`).value = allAnswers[1];
        document.getElementById(`answer2`).style.display = "none";
        document.getElementById(`answer3`).style.display = "none";
    } else {
        document.getElementById(`answer0`).value = allAnswers[0];
        document.getElementById(`answer1`).value = allAnswers[1];
        document.getElementById(`answer2`).value = allAnswers[2];
        document.getElementById(`answer3`).value = allAnswers[3];
        document.getElementById(`answer2`).style.display = "block";
        document.getElementById(`answer3`).style.display = "block";
    }
}

// TIMER
function startTimer() {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Il tempo è scaduto!");
        } else {
            timeLeft--;
            timerElement.textContent = timeLeft;
            const percentage = (timeLeft / 60) * 100;
            const angle = (percentage / 100) * 360;
            cerchioElement.style.background = `conic-gradient(#4CAF50 ${angle}deg, transparent ${angle}deg)`;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = 60;
    timerElement.textContent = timeLeft;
    cerchioElement.style.background = `conic-gradient(#4CAF50 360deg, transparent 360deg)`;
}

// CONTROLLA PULSANTI E NE RENDO CLICCABILE SOLO 1
const buttons = document.querySelectorAll('input[name="answer"]');
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        selectedIndex = index;
    });
});

document.getElementById("submit-quiz").addEventListener("click", () => {
    if (selectedIndex !== -1) {
        selectedAnswers[currentQuestionIndex] = selectedIndex;
        const currentQuestion = questionsJavaScriptHard[currentQuestionIndex];
        const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
        if (allAnswers[selectedIndex] === currentQuestion.correct_answer) {
            correctAnswersCount++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questionsJavaScriptHard.length) {
            displayQuestion();
            resetTimer();
            startTimer();
            selectedIndex = -1;
        } else {
            clearInterval(countdown);
            document.getElementById("score").textContent = `${correctAnswersCount} / ${questionsJavaScriptHard.length}`;

            //SALVO IL RISULTATO
            localStorage.setItem("quizResult", JSON.stringify({
                correctAnswers: correctAnswersCount,
                totalQuestions: questionsJavaScriptHard.length
            }));
            const switchButton = document.getElementById("switch-to-result");
            switchButton.style.display = "unset";
            const SubmitButton = document.getElementById("submit-quiz");
            SubmitButton.style.display = "none";
            switchButton.addEventListener("click", () => {
                window.location.href = "Results.html";
            });
        }
    }
});

window.onload = () => {
    displayQuestion();
    startTimer();
};