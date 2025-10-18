const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;

  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  card.style.boxShadow = `${-x}px ${-y}px 20px rgba(255,255,255,0.2)`;
});

// Reset on mouse leave
card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  card.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
});
document.addEventListener("mousemove", (e) => {
  document.querySelector('.custom-cursor').style.left = `${e.pageX}px`;
  document.querySelector('.custom-cursor').style.top = `${e.pageY}px`;
});