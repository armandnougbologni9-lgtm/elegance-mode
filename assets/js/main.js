/**
 * Élégance Mode — Scripts partagés
 * Gère les fonctionnalités communes à toutes les pages (année dynamique, accessibilité)
 */
document.addEventListener("DOMContentLoaded", () => {
  // Mise à jour automatique de l'année dans le pied de page
  const currentYearElement = document.querySelector("#current-year");
  if (currentYearElement) {
    currentYearElement.textContent = String(new Date().getFullYear());
  }

  // Marquer la page active si ce n'est pas déjà fait
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath && !link.hasAttribute("aria-current")) {
      link.setAttribute("aria-current", "page");
    }
  });
});
