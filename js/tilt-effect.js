const tiltCard = document.querySelector('.post-block');

tiltCard.addEventListener('mousemove', (e) => {
  const rect = tiltCard.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const tiltX = (mouseX - rect.width / 2) / 10;
  const tiltY = (rect.height / 2 - mouseY) / 10;

  tiltCard.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
});

tiltCard.addEventListener('mouseleave', () => {
  tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});