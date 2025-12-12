document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".vote-btn");

    buttons.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // stop link from jumping

            // Generate fake percentages (they always add to 100)
            const vistaPercent = Math.floor(Math.random() * 41) + 30; // 30–70
            const olaPercent = 100 - vistaPercent;

            const choice = this.dataset.vote;

            if (choice === "vista") {
                this.textContent = `vista 🐔 — ${vistaPercent}%`;
            } else if (choice === "ola") {
                this.textContent = `ola 🥚 — ${olaPercent}%`;
            }

            // IMPORTANT: we do NOT touch the other button, so only one shows %
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const photos = [
      "eagle.jpg",
      "family.jpg",
      "paris.jpg",
      "papgailu.jpg"
    ];

    let index = 0;

    const img = document.getElementById("gallery-photo");
    const prev = document.getElementById("prev-btn");
    const next = document.getElementById("next-btn");

    if (!img || !prev || !next) {
      console.error("Gallery elements not found – check your IDs.");
      return;
    }

    prev.addEventListener("click", function (e) {
      e.preventDefault();
      index = (index - 1 + photos.length) % photos.length;
      img.src = photos[index];
    });

    next.addEventListener("click", function (e) {
      e.preventDefault();
      index = (index + 1) % photos.length;
      img.src = photos[index];
    });
  });
  
