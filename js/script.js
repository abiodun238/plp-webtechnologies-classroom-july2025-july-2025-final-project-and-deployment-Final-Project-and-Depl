// Toggle Menu for Mobile
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Simple Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "Thank you! Your message has been sent.";
      message.style.color = "green";
      form.reset();
    });
  }
});
