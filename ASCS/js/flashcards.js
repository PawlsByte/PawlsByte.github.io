document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("flashcard-container");

  fetch("../data/flashcards.json")
    .then(res => res.json())
    .then(data => {
      data.forEach((card, index) => {
        const cardEl = document.createElement("div");
        cardEl.className = "flashcard";
        cardEl.innerHTML = \`
          <div class="front">\${card.term}</div>
          <div class="back">\${card.definition}</div>
        \`;
        cardEl.addEventListener("click", () => {
          cardEl.classList.toggle("flipped");
        });
        container.appendChild(cardEl);
      });
    });
});
