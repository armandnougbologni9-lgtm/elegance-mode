const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formFeedback.classList.remove("is-error");

    if (!contactForm.reportValidity()) {
      formFeedback.textContent = "Veuillez vérifier les champs indiqués avant de continuer.";
      formFeedback.classList.add("is-error");
      return;
    }

    formFeedback.textContent = "Merci pour votre message. Le formulaire est prêt, mais l’envoi réel n’est pas encore connecté.";
    contactForm.reset();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
