const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function makeSparkles(amount = 35) {
  const symbols = ["✦", "✧", "•", "✺"];
  for (let i = 0; i < amount; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "confetti";
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${-10 - Math.random() * 25}px`;
    sparkle.style.color = Math.random() > 0.5 ? "#f7d995" : "#d89acb";
    sparkle.style.animationDelay = `${Math.random() * 0.8}s`;
    sparkle.style.fontSize = `${10 + Math.random() * 14}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3600);
  }
}

document.getElementById("surpriseBtn").addEventListener("click", () => {
  makeSparkles(28);
  showToast("A little light and a lot of happiness! 🪔");
});

document.getElementById("wishBtn").addEventListener("click", () => {
  const message = "Wishing you and your family a bright, joyful and beautiful Diwali! 🪔✨";
  document.getElementById("wishResult").textContent = message;
  makeSparkles(55);
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(message).then(
      () => showToast("Your Diwali wish is copied! Share the joy."),
      () => showToast("Your Diwali wish is ready below. ✨")
    );
  } else {
    showToast("Your Diwali wish is ready below. ✨");
  }
});
