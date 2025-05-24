 // Mobile menu toggle
 document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
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
  