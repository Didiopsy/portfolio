// ============================================
// DONNÉES — ton tableau de projets
// Remplis avec TES vrais projets
// ============================================
const projects = [
  {
    title: "The Storm",
    description: "Première JAM hors scolaire d'une semaine fait avec GDevelop",
    tags: ["GDevelop"],
    image: "assets/img/TitleCard.png",
    github: "https://didiopsyyy.itch.io/the-storm",
    demo: "https://didiopsyyy.itch.io/the-storm"
  },
  {
    title: "Tetris Web",
    description: "Jeux tetris en utilsant l'attribut Canvas de javascript.",
    tags: ["HTML", "CSS", "JavaScript", "Canvas"],
    image: "assets/img/tetris_web.png",
    github: "https://github.com/Didiopsy/tetris_web",
    demo: "https://tetris-web-rosy.vercel.app/"
  },
  {
    title: "Portfolio",
    description: "Ce portfolio ! Conçu et développé en HTML/CSS/JS vanilla, déployé sur Vercel.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "assets/img/portfolio.png",
    github: "https://github.com/Didiopsy/portfolio",
    demo: "#"
  }
];

// ============================================
// GÉNÉRATION — crée une card HTML par projet
// ============================================
const generateCards = () => {
  const grid = document.querySelector("#projects-grid");

  if (!grid) return;
  projects.forEach((project) => {
    const cardHTML = `
      <article class="card reveal">
        <img
          src="${project.image}"
          alt="Capture d'écran du projet ${project.title}"
          loading="lazy"
        />
        <div class="card-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="card-links">
            <a href="${project.github}" target="_blank" rel="noopener">
              GitHub
            </a>
            <a href="${project.demo}" target="_blank" rel="noopener" class="btn-demo">
              Voir le site →
            </a>
          </div>
        </div>
      </article>
    `;
    grid.innerHTML += cardHTML;
  });
};
generateCards();