const pages = [...document.querySelectorAll('.page')];
const navLinks = [...document.querySelectorAll('.nav-link')];

function showPage(id) {
  pages.forEach(page => page.classList.toggle('active', page.id === id));
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === id));
  if (id === 'surprise') makeHearts(12);
  window.scrollTo({top: 0, behavior: 'smooth'});
}
document.querySelectorAll('[data-go]').forEach(button => {
  button.addEventListener('click', () => showPage(button.dataset.go));
});
navLinks.forEach(button => {
  button.addEventListener('click', () => showPage(button.dataset.page));
});
document.getElementById('more-hearts').addEventListener('click', () => makeHearts(35));

const heartLayer = document.getElementById('floating-hearts');
function makeHearts(count = 12) {
  const symbols = ['♥', '♡', '💗', '✨'];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'float-heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.animationDuration = `${4 + Math.random() * 5}s`;
    heartLayer.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
}
makeHearts(20);
