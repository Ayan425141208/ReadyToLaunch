const cursor = document.querySelector('.circle-cursor');
const cards = document.querySelectorAll('.glass-card');

// Move the cursor with the mouse
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Cursor animation on card hover
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    cursor.style.background = 'rgba(255, 255, 255, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'transparent';
  });

  // Navigation simulation (click to go to another page)
  card.addEventListener('click', () => {
    const destination = card.getAttribute('data-destination');
    window.location.href = destination;
  });
});
