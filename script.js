document.addEventListener("DOMContentLoaded", function() {
  const envelope = document.querySelector(".envelope");
  const welcome = document.getElementById("welcome");
  const website = document.getElementById("website");

  if (envelope && welcome && website) {
    envelope.addEventListener("click", function() {
      envelope.classList.add("fade-out");
      setTimeout(function() {
        welcome.style.display = "none";
        website.classList.add("show");
      }, 1000);
    });
  }

  document.body.addEventListener("click", function(e) {
    if (e.target && e.target.id === "memoriesBtn") {
      const timelineSection = document.querySelector(".timeline");
      if (timelineSection) {
        timelineSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "memories.html";
      }
    }
  });

  const images = document.querySelectorAll(".gallery-container img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  if (images.length && lightbox && lightboxImg && closeBtn) {
    images.forEach(function(image) {
      image.addEventListener("click", function() {
        lightboxImg.src = this.src;
        lightbox.classList.add("show");
      });
    });

    closeBtn.addEventListener("click", function() {
      lightbox.classList.remove("show");
    });

    lightbox.addEventListener("click", function(event) {
      if (event.target === lightbox) {
        lightbox.classList.remove("show");
      }
    });
  }

  const memories = [
    "❤️ Remember our first selfie?",
    "😂 I'll never forget how much we laughed that day on our first night stay.",
    "🍕 Our coffee date are always the best!",
    "🎂 Your birthday is one of my favourite memories.",
    "🚂 Our first train journey together was amazing.",
    "🌸 Thank you for always being there for me."
  ];

  const memoryBtn = document.getElementById("memory-btn");
  const memoryText = document.getElementById("memory-text");

  if (memoryBtn && memoryText) {
    memoryBtn.addEventListener("click", function() {
      const random = Math.floor(Math.random() * memories.length);
      memoryText.innerText = memories[random];
    });
  }

  const song = document.getElementById("song");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");

  if (song && playBtn && pauseBtn) {
    playBtn.addEventListener("click", function() {
      song.play();
    });

    pauseBtn.addEventListener("click", function() {
      song.pause();
    });
  }

  const giftBtn = document.getElementById("gift-btn");
  const finalMessage = document.getElementById("final-message");

  if (giftBtn && finalMessage) {
    finalMessage.style.display = "none";

    giftBtn.addEventListener("click", function() {
      finalMessage.style.display = "block";
      finalMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      createConfetti(40);
      createFloatingHearts(12);
      createSparkles(20);
    });
  }

  function createConfetti(count) {
    const container = document.getElementById("confetti-container");
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.background = ["#ff6b81", "#ffca65", "#6bc1ff", "#ff82d4", "#8d56ff"][Math.floor(Math.random() * 5)];
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.top = -20 + Math.random() * 20 + "vh";
      piece.style.width = 8 + Math.random() * 8 + "px";
      piece.style.height = 8 + Math.random() * 8 + "px";
      piece.style.animationDuration = 2 + Math.random() * 1.5 + "s";
      container.appendChild(piece);

      piece.addEventListener("animationend", function() {
        piece.remove();
      });
    }
  }

  function createFloatingHearts(count) {
    const container = document.body;
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.textContent = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 80 + 10 + "%";
      heart.style.bottom = "-40px";
      heart.style.fontSize = 18 + Math.random() * 22 + "px";
      heart.style.pointerEvents = "none";
      heart.style.opacity = "0.9";
      heart.style.transition = "transform 3s ease-out, opacity 3s ease-out";
      container.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = "0";
      });

      setTimeout(() => heart.remove(), 3000);
    }
  }

  function createSparkles(count) {
    const container = document.getElementById("confetti-container");
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.top = Math.random() * 80 + "vh";
      sparkle.style.animationDuration = 1 + Math.random() * 0.8 + "s";
      container.appendChild(sparkle);

      sparkle.addEventListener("animationend", function() {
        sparkle.remove();
      });
    }
  }
});
