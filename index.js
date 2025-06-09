// Mobile menu toggle
const toggleBtn = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const menuLabel = document.getElementById("menu-label");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");

  if (isOpen) {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.replace("fa-times", "fa-bars");
    menuLabel.textContent = "MENU";
  } else {
    mobileMenu.classList.remove("hidden");
    menuIcon.classList.replace("fa-bars", "fa-times");
    menuLabel.textContent = "CLOSE";
  }
});

// Shrink section on scroll
const aboutSection = document.getElementById("about");
window.addEventListener("scroll", () => {
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

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000, // animation duration in ms
    easing: "ease-in-out",
    once: true, // whether animation should happen only once
    offset: 100, // offset (in px) from the original trigger point
  });
});



      

      

      
       

       

      
      // Contact 

       // FAQ toggle functionality
      document.querySelectorAll(".faq-toggle").forEach((button) => {
        button.addEventListener("click", () => {
          const content = button.nextElementSibling;
          const icon = button.querySelector("i");

          content.classList.toggle("hidden");
          icon.classList.toggle("rotate-180");
        });
      });

      // Form submission
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Here you would typically send the form data to your server
          // For this example, we'll just show a success message
          alert("Thank you for your message! We will get back to you soon.");
          this.reset();
        });

