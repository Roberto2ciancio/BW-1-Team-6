const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];


let currentQuestionIndex = 0;
let selectedAnswers = [];
let correctAnswersCount = 0;
let timeLeft = 60;
let countdown;
const cerchioElement = document.getElementById('cerchio');
const timerElement = document.getElementById('timer').querySelector('span');
let selectedIndex = -1; // Aggiungi questa variabile

// DOMANDE
function displayQuestion() {
    const question = questions[currentQuestionIndex];
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

// CONTROLLA PULSANTI
const buttons = document.querySelectorAll('input[name="answer"]');
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        selectedIndex = index;
    });
});

document.getElementById("submit-quiz").addEventListener("click", () => {
    if (selectedIndex !== -1) {
        selectedAnswers[currentQuestionIndex] = selectedIndex;
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
            if (allAnswers[selectedIndex] === currentQuestion.correct_answer) {
                correctAnswersCount++;
            }
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            resetTimer();
            startTimer();
            selectedIndex = -1; // Resetta selectedIndex
        } else {
            clearInterval(countdown);
            document.getElementById("score").textContent = `RESULT: ${correctAnswersCount} / ${questions.length}`;
        }
    }
});

window.onload = () => {
    displayQuestion();
    startTimer();
};