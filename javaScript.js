const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const volunteerForm = document.getElementById("volunteerForm");
const successMessage = document.getElementById("successMessage");

volunteerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  successMessage.innerHTML = `
    <h3 style="margin-top:20px;color:green;">
      Registration Successful!
    </h3>
  `;

  volunteerForm.reset();
});

function animateValue(id, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));

  const obj = document.getElementById(id);

  const timer = setInterval(() => {
    current += increment;
    obj.textContent = current;

    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("volunteers", 0, 5000, 1500);
animateValue("students", 0, 1200, 2300);
animateValue("campaigns", 0, 80, 1500);

const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

setInterval(() => {
  testimonials[currentTestimonial].classList.remove("active");

  currentTestimonial = (currentTestimonial + 1) % testimonials.length;

  testimonials[currentTestimonial].classList.add("active");
}, 3000);

const cards = document.querySelectorAll(".card, .team-card, .event-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });
});
