const questions = [
  {
    question: "Which Is Largest Animal In The World",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elaphant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which Is Largest desert In The World",
    answers: [
      { text: "kalahari", correct: false },
      { text: "gobi", correct: false },
      { text: "sahara", correct: true },
      { text: "thar", correct: false },
    ],
  },
  {
    question: "Which Is Largest State In The World",
    answers: [
      { text: "Europe ", correct: true },
      { text: "United Stated", correct: false },
      { text: "United Kingdom", correct: false },
      { text: "Russian Federation", correct: false },
    ],
  },
  {
    question: "Which One Is The High Rated TV Series(Netflix)",
    answers: [
      { text: "Money Heist", correct: false },
      { text: "Better Call Saul", correct: false },
      { text: "Squid Game", correct: false },
      { text: "Breaking Bad", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answer_Buttons = document.getElementById("answer-buttons");
const Next_Button = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function ShowQuestions() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answer_Buttons.appendChild(button);
  });
}
function StartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  Next_Button.innerHTML = "Next";
  ShowQuestion();
}
StartQuiz();
ShowQuestions();
