     function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('show');
    }


const scrollContainer = document.getElementById("scrollContainer");
  const dots = document.querySelectorAll(".dot");

  if (scrollContainer) {
    scrollContainer.addEventListener("scroll", () => {
      const index = Math.round(scrollContainer.scrollLeft / scrollContainer.offsetWidth);
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[index]) dots[index].classList.add("active");
    });
  }

 
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.slide-in-left').classList.add('animate');
    document.querySelector('.slide-in-right').classList.add('animate');
  });
   window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.slide-in-left-work').classList.add('animate');
  });

 
