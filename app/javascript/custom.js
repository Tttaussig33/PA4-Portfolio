console.log("custom.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Tooltip for footer icons
  document.querySelectorAll("footer a").forEach(link => {
    link.setAttribute("title", link.href);
  });

  // Dark mode toggle (enabled)
  const toggle = document.querySelector("#darkModeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("bg-dark");
      document.body.classList.toggle("text-white");
    });
  }
});