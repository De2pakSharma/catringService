document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('active');
});

document.getElementById('closeMenu').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.remove('active');
});


const scrollContainer = document.getElementById("scrollContainer");
  const dots = document.querySelectorAll(".dot");

  if (scrollContainer) {
    scrollContainer.addEventListener("scroll", () => {
      const index = Math.round(scrollContainer.scrollLeft / scrollContainer.offsetWidth);
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[index]) dots[index].classList.add("active");
    });
  }