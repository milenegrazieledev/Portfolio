// Efeito de brilho suave ao passar o mouse nos cards
const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 30px #a970ff';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 0 20px #8c00ff20';
  });
});
