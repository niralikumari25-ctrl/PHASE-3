const question = [
    {
        question: " What does HTML stand for?",
        answer: [
            { text: "Hyper Trainer Marking Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Marketing Language", correct: false },
            { text: "High Text Marking Language", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the text color?",
        answer: [
            { text: "font-color", correct: false },
            { text: "text-style", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false },
        ]
    },

    {
        question: "How do you select an element with id header in CSS?",
        answer: [
            { text: ".header", correct: false },
            { text: "#header", correct: true },
            { text: "header", correct: false },
            { text: "*header", correct: false },
        ]
    },

    {
        question: "Which CSS property is used to make text bold?",
        answer: [
            { text: "font-weight", correct: true },
            { text: "text-bold", correct: false },
            { text: "font-style", correct: false },
            { text: "bold", correct: false },
        ]
    },
    {
        question: " Which is not comes in units ?",
        answer: [
            { text: "em", correct: false },
            { text: "vh", correct: false },
            { text: "%", correct: false },
            { text: "cm", correct: true },
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetstate();
    let currentQuestion = question[currentQuestionIndex];      //How many questions are left
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetstate() {
    nextButton.style.display = "none";                    // hide next button when i click answer then it show
    while (answerButtons.firstChild) {                   // add new button
        answerButtons.removeChild(answerButtons.firstChild);       // remove perivous button
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;                                //click button by user
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {              // if user click wrong answer button still it will show correct answer
            button.classList.add("correct");
        }
        button.disabled = true;                              //only one time user click button
    });

    nextButton.style.display = "block";
}
function showScore() {
    resetstate();
    questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}






nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});



startQuiz();
