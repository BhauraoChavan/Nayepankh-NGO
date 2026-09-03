document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // HAMBURGER MENU
  // =========================
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Auto close menu when clicking link (mobile UX improvement)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // =========================
  // DARK MODE (SAFE)
  // =========================
  const darkModeBtn = document.getElementById("darkModeBtn");

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // =========================
  // VOLUNTEER FORM
  // =========================
  const form = document.getElementById("volunteerForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (successMessage) {
        successMessage.innerHTML =
          "<h3 style='color:green;margin-top:15px;'>Registration Successful!</h3>";
      }

      form.reset();
    });
  }

  // =========================
  // COUNTER ANIMATION (FIXED)
  // =========================
  function animateCounter(id, target, speed = 10) {
    const el = document.getElementById(id);
    if (!el) return;

    let count = 0;

    const interval = setInterval(() => {
      count++;
      el.textContent = count;

      if (count >= target) {
        clearInterval(interval);
      }
    }, speed);
  }

  animateCounter("volunteers", 500, 5);
  animateCounter("students", 10000, 1);
  animateCounter("campaigns", 120, 20);

  // =========================
  // TESTIMONIAL SLIDER (FIXED SAFE)
  // =========================
  const testimonials = document.querySelectorAll(".testimonial");

  if (testimonials.length > 1) {
    let index = 0;

    setInterval(() => {
      testimonials.forEach(t => t.classList.remove("active"));

      index = (index + 1) % testimonials.length;

      testimonials[index].classList.add("active");
    }, 3000);
  }

});