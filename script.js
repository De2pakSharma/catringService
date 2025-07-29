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


 
