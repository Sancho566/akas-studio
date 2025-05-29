 // Mobile menu toggle
 const toggleBtn   = document.getElementById('menu-toggle');
  const menuIcon    = document.getElementById('menu-icon');
  const menuLabel   = document.getElementById('menu-label');
  const mobileMenu  = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      // Close menu
      mobileMenu.classList.add('hidden');
      menuIcon.classList.replace('fa-times', 'fa-bars');
      menuLabel.textContent = 'MENU';
    } else {
      // Open menu
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.replace('fa-bars', 'fa-times');
      menuLabel.textContent = 'CLOSE';
    }
  });
  
 // Shrink section on scroll
 const aboutSection = document.getElementById('about');
 window.addEventListener('scroll', () => {
   const scrollY = window.scrollY;
   // Calculate scale between 1 and 0.8 based on scroll position (max shrink after 500px)
   const scaleFactor = Math.max(0.8, 1 - scrollY / 2500);
   aboutSection.style.transform = `scale(${scaleFactor})`;
 });

window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("landing").style.display = "none";
      document.getElementById("main-content").classList.remove("opacity-0");
    }, 2000);
  });
  