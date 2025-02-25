let quizData = {
    response_code: 0,
    results: [
      {

    
      
        type: "multiple",
        question: "The Electron computer was released in Britain during 1983 for the home computing market, by which company? ",
        correct_answer : "Acorn Computers",
        incorrect_answers: [
          "Sinclair Research",
          "Amstrad PLC",
          "Commodore Business Machines"
        ]
      },
      
      
      
      {
        type: "boolean",
        
        question : "Ada Lovelace is often considered the first computer programmer.",
        correct_answer : "True",
        incorrect_answers : [
          "False"
        ]
      },
        
      {
        type : "multiple",
        
        question : "What language does Node.js use?",
        correct_answer : "JavaScript",
        incorrect_answers : [
          "Java",
          "Java Source",
          "Joomla Source Code"
        ]
      },
        
      {
        type : "multiple",
        
        question : "What does the computer software acronym JVM stand for?",
        correct_answer : "Java Virtual Machine",
        incorrect_answers : [
          "Java Vendor Machine",
          "Java Visual Machine",
          "Just Virtual Machine"
        ]
      },
      {
        type: "boolean",
        
        question: "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
        correct_answer : "True",
        incorrect_answers : [
          "False"
        ]
      },
      {
        type : "multiple",
        
        question : "How long is an IPv6 address?",
        correct_answer : "128 bits",
        incorrect_answers : [
          "32 bits",
          "64 bits",
          "128 bytes"
        ]
      },
      {
        type : "multiple",
       
        question : "How many kilobytes in one gigabyte (in decimal)?",
        correct_answer : "1000000",
        incorrect_answers : [
          "1024",
          "1000",
          "1048576"
        ]
      },
      {
        type : "boolean",
       
        question : "The Windows ME operating system was released in the year 2000.",
        correct_answer : "True",
        incorrect_answers : [
          "False"
        ]
      },
      {
        type : "multiple",
        
        question : "The C programming language was created by this American computer scientist. ",
        correct_answer : "Dennis Ritchie",
        incorrect_answers : [
          "Tim Berners Lee",
          "al-Khwārizmī",
          "Willis Ware"
        ]
      },
      {
        type : "boolean",
      
        question : "The logo for Snapchat is a Bell.",
        correct_answer : "False",
        incorrect_answers : [
          "True"
        ]
      }
    ]
  }
  for (let index = 0; index < quizData.results.length; index++) {
    const question = quizData.results[index]
    
    function checkAnswer(button, correctAnswer) {
        const userAnswer = button.getAttribute('data-answer')
        if (userAnswer === correctAnswer) {
            alert('Correct!')
            score++
        } else {
            alert('Incorrect!')
        }
        document.getElementById("score").textContent = score
 
        const quiz = document.getElementById("question")
let score = 0

  }
    const questionDiv = document.createElement("div")
    questionDiv.classList.add("question")

    const questionText = document.createElement("p")
    questionText.textContent = (index + 1) + '. ' + question.question
    questionDiv.appendChild(questionText)

    
    if (question.type === "multiple") {
        const answers = [...question.incorrect_answers, question.correct_answer];
         

        
        answers.forEach(answer => {
            const answerButton = document.createElement("input")
            answerButton.type = "button";
            answerButton.value = answer;
            answerButton.setAttribute('data-answer', answer)
            answerButton.addEventListener('click', () => {
                checkAnswer(answerButton, question.correct_answer)
            });
            questionDiv.appendChild(answerButton)
        })
    }
    
    else if (question.type === 'boolean') {
      
        const trueButton = document.createElement('input')
        trueButton.type = 'button'
        trueButton.value = 'True'
        trueButton.setAttribute('data-answer', 'True')
        trueButton.addEventListener('click', () => {
            checkAnswer(trueButton, question.correct_answer)
        })

        
        const falseButton = document.createElement('input') 
        falseButton.type = 'button'
        falseButton.value = 'False'
        falseButton.setAttribute('data-answer', 'False')
        falseButton.addEventListener('click', () => {
            checkAnswer(falseButton, question.correct_answer)
        })

        const quiz =document.getElementById("quiz")
         function() {
          quiz.classList.add(quizData)
        }

        questionDiv.appendChild(trueButton)
        questionDiv.appendChild(falseButton)
        quiz.appendChild(questionDiv)
    }

    
}



