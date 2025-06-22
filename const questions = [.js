const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Tool Markup Language", "HyperText Markup Language", "Home Text Main Link"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JS"],
    answer: "CSS"
  },
  {
    question: "Inside which HTML tag do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>"],
    answer: "<script>"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const curr = questions[current];
  questionEl.textContent = curr.question;
  optionsEl.innerHTML = "";

  curr.options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(li, curr.answer);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected, correct) {
  Array.from(optionsEl.children).forEach(li => {
    li.classList.remove("correct", "wrong");
    li.style.pointerEvents = "none";
    if (li.textContent === correct) li.classList.add("correct");
  });

  if (selected.textContent === correct) {
    score++;
  } else {
    selected.classList.add("wrong");
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your score: ${score}/${questions.length}`;
}

loadQuestion();
