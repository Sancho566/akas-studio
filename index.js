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

window.addEventListener("load", () => {
  setTimeout(() => {
    const landing = document.getElementById("landing");
    const mainContent = document.getElementById("main-content");
    if (landing) landing.style.display = "none";
    if (mainContent) mainContent.classList.remove("opacity-0");
  }, 2000);
});

AOS.init({
  duration: 700,
  easing: "ease-in-out",
  once: true,
  offset: 120,
});
