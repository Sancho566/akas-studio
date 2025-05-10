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

 
