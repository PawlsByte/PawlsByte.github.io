document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  let score = 0;
  let index = 0;

  fetch("../data/questions.json")
    .then(res => res.json())
    .then(data => {
      function showQuestion() {
        const q = data[index];
        quizContainer.innerHTML = \`
          <h3>\${q.question}</h3>
          <ul>
            \${q.options.map((opt, i) => \`<li><button data-index="\${i}">\${opt}</button></li>\`).join("")}
          </ul>
        \`;

        document.querySelectorAll("button").forEach(btn => {
          btn.addEventListener("click", () => {
            const chosen = parseInt(btn.dataset.index);
            if (chosen === q.answer) {
              score++;
              alert("Correct!");
            } else {
              alert("Incorrect. " + q.explanation);
            }
            index++;
            if (index < data.length) {
              showQuestion();
            } else {
              quizContainer.innerHTML = "";
              resultContainer.textContent = "Quiz Complete! Your score: " + score + "/" + data.length;
            }
          });
        });
      }

      showQuestion();
    });
});
