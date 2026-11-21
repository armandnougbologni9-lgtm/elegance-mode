/**
 * Élégance Mode — Logique interactive de la galerie Lookbook (gallery.js)
 * Gère le filtrage dynamique des silhouettes et silhouettes en mouvement
 */
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryCards = document.querySelectorAll(".gallery-card");

  if (!filterButtons.length || !galleryCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Met à jour les états des boutons
      filterButtons.forEach((btn) => {
        btn.classList.remove("is-active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");

      const filterValue = button.getAttribute("data-filter");

      // Anime et filtre les cartes
      galleryCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.classList.remove("is-hidden");
          card.style.opacity = "0";
          card.style.transform = "translateY(8px)";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 40);
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });
});
