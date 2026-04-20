// ============================================
// NAVBAR — effet au scroll
// ============================================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  // Si on a scrollé plus de 60px → ajoute la classe "scrolled"
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ============================================
// MENU MOBILE — hamburger toggle
// ============================================
const navToggle = document.querySelector(".nav-toggle");
const navLinks  = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
// Fermer le menu quand on clique sur un lien
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
const footer = document.querySelector("footer p");
if (footer) {
  footer.textContent = `Fait avec curiosité par Adan Hamitouche — 2026`;
}