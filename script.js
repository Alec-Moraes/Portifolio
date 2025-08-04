const darkToggle = document.getElementById("dark-mode-toggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Alternar ícone: lua 🌙 para sol ☀️
  if (document.body.classList.contains("dark-mode")) {
    darkToggle.textContent = "🌞";
  } else {
    darkToggle.textContent = "🌙";
  }
});