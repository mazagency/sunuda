// Apparition des sections au défilement
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Défilement fluide du menu
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Message après le formulaire
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Merci ! Votre demande a été envoyée avec succès à SONUDA.");

    form.reset();
  });
}

