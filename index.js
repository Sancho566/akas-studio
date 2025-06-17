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

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const res  = await fetch('contact-form-handler.php', {
      method: 'POST',
      body: data
    });
    const json = await res.json();

    if (res.ok && json.success) {
      alert(json.success);
      form.reset();
    } else {
      alert(json.error || 'An error occurred. Please try again.');
    }
  } catch (err) {
    console.error(err);
    alert('Could not send message. Please try again later.');
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane ml-2"></i>';
  }
});