// ============================================
// SCROLL REVEAL
// Anime les éléments quand ils entrent dans la vue
// ============================================

const observer = new IntersectionObserver(
  // Callback appelé quand un élément observé change d'état
  (entries) => {
    entries.forEach((entry) => {
      // entry.isIntersecting = true quand l'élément est visible
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // On arrête d'observer cet élément — l'animation
        observer.unobserve(entry.target);
      }
    });
  },
  // Options
  {
    threshold: 0.15,
    // 0.15 = l'élément doit être visible à 15% minimum
    // avant que le callback soit déclenché
  }
);

// On observe TOUS les éléments avec la classe "reveal"
const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((el) => observer.observe(el));