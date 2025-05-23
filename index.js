 // Mobile menu toggle
 document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Form submission (simulated)
const newsletterForm = document.querySelector('footer form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

 // Shrink section on scroll
 const aboutSection = document.getElementById('about');
 window.addEventListener('scroll', () => {
   const scrollY = window.scrollY;
   // Calculate scale between 1 and 0.8 based on scroll position (max shrink after 500px)
   const scaleFactor = Math.max(0.8, 1 - scrollY / 2500);
   aboutSection.style.transform = `scale(${scaleFactor})`;
 });

  // Landing Page Logic
    document.addEventListener('DOMContentLoaded', () => {
      const landingPage = document.getElementById('landing-page');
      const mainContent = document.getElementById('main-content');
      
      if(localStorage.getItem('akasStudioVisited')) {
        landingPage.remove();
        mainContent.style.display = 'block';
      } else {
        setTimeout(() => {
          document.querySelectorAll('.scale-fade-in').forEach(el => {
            el.classList.add('visible');
          });
        }, 200);
      }
    });

    document.getElementById('enter-btn')?.addEventListener('click', () => {
      localStorage.setItem('akasStudioVisited', 'true');
      const landingPage = document.getElementById('landing-page');
      
      landingPage.classList.add('landing-page-fade-out');
      
      setTimeout(() => {
        landingPage.remove();
        document.getElementById('main-content').style.display = 'block';
      }, 900);
    });

    // Keep your existing JavaScript for mobile menu
    document.getElementById('mobile-menu-button')?.addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });
