const quizData = [
  {
    question: "What is the correct syntax to declare a constant in JavaScript?",
    options: ["let x = 10;", "const x = 10;", "var x = 10;", "constant x = 10;"],
    correct: 1,
  },
  {
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
    correct: 0,
  },
  {
    question: "How do you write an arrow function in JavaScript?",
    options: [
      "function() => {}",
      "() => {}",
      "() -> {}",
      "arrow() {}",
    ],
    correct: 1,
  },
  {
    question: "Which built-in method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    correct: 0,
  },
  {
    question: "What is the output of `console.log(typeof NaN)`?",
    options: ["NaN", "number", "undefined", "object"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");

function loadQuestion() {
  const questionData = quizData[currentQuestionIndex];
  quizContainer.innerHTML = `
    <div class="question">${questionData.question}</div>
    <div class="options">
      ${questionData.options
        .map(
          (option, index) => `
          <button onclick="submitAnswer(${index})">${option}</button>`
        )
        .join("")}
    </div>
  `;
}

function submitAnswer(selectedIndex) {
  const questionData = quizData[currentQuestionIndex];
  if (selectedIndex === questionData.correct) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! The correct answer is: ${
      questionData.options[questionData.correct]
    }`);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizContainer.innerHTML = `
    <div class="results">
      <h2>Quiz Completed</h2>
      <p>Your score is ${score} out of ${quizData.length}</p>
      <button onclick="restartQuiz()">Retry</button>
    </div>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}

loadQuestion();
