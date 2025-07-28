document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("test-container");
  const resultEl = document.getElementById("test-result");
  const progressEl = document.getElementById("progress");
  let index = 0;
  let score = 0;

  fetch("../data/practice-questions.json")
    .then(res => res.json())
    .then(data => {
      // simple shuffle for question order
      data.sort(() => Math.random() - 0.5);
      function showQuestion() {
        const q = data[index];
        progressEl.textContent = `Question ${index + 1} of ${data.length}`;
        container.innerHTML = `
          <h3>${q.question}</h3>
          <ul>
            ${q.options.map((opt,i)=>`<li><button data-index="${i}">${opt}</button></li>`).join('')}
          </ul>
          <button id="hint-btn" style="margin-top:1rem;">Hint</button>
          <p id="hint" style="display:none;margin-top:0.5rem;background:#f1f1f1;padding:0.5rem;border-radius:4px;"></p>
        `;

        document.getElementById("hint-btn").addEventListener("click", () => {
          const hint = document.getElementById("hint");
          hint.textContent = q.hint;
          hint.style.display = "block";
        });

        container.querySelectorAll("button[data-index]").forEach(btn => {
          btn.addEventListener("click", () => {
            const chosen = parseInt(btn.dataset.index);
            if (chosen === q.answer) {
              score++;
            }
            index++;
            if (index < data.length) {
              showQuestion();
            } else {
              container.innerHTML = "";
              progressEl.textContent = "";
              resultEl.textContent = `Test Complete! Score: ${score}/${data.length}`;
            }
          });
        });
      }

      showQuestion();
    });
});
