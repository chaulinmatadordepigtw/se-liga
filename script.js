let currentQuestion = 0;
const questions = [
    {
        question: "Quem é a Kuchisake-Onna?",
        answers: {
            a: "Uma mulher que tem a boca rasgada",
            b: "Uma mulher que tem uma cabeça gigante",
            c: "Uma mulher que aparece em espelhos",
            d: "Uma mulher com o corpo de um monstro"
        },
        correctAnswer: "a"
    },
    {
        question: "O que a Kuchisake-Onna pergunta para suas vítimas?",
        answers: {
            a: "Você acha que eu sou bonita?",
            b: "Você sabe onde fica o templo?",
            c: "Você me ama?",
            d: "Você já me viu antes?"
        },
        correctAnswer: "a"
    },
    {
        question: "Qual é a reação das vítimas se responderem errado?",
        answers: {
            a: "Elas são seguidas e mortas",
            b: "Elas ficam amaldiçoadas",
            c: "Elas têm sua boca rasgada também",
            d: "Elas desaparecem"
        },
        correctAnswer: "a"
    }
];

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    const answers = document.querySelectorAll('.answers label');
    const answerKeys = Object.keys(question.answers);
    
    answers.forEach((label, index) => {
        const input = label.querySelector('input');
        input.value = answerKeys[index];
        label.innerHTML = `${question.answers[answerKeys[index]]}`;
    });

    document.getElementById("result").textContent = "";
    document.getElementById("next").disabled = false;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const answerValue = selectedAnswer.value;
        const question = questions[currentQuestion];
        const result = document.getElementById("result");

        if (answerValue === question.correctAnswer) {
            result.textContent = "Resposta correta! Bem feito.";
        } else {
            result.textContent = "Resposta errada! Tente novamente.";
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            // Avançar para a próxima pergunta após um pequeno delay
            setTimeout(showQuestion, 1500);
        } else {
            // Finalizou o quiz
            setTimeout(() => {
                result.textContent = "Você completou o quiz!";
                document.getElementById("next").disabled = true;
            }, 1500);
        }
    } else {
        alert("Por favor, selecione uma resposta!");
    }
}

showQuestion();
