document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you for contacting SM Solutions! We'll reach out soon.");
  e.target.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  
  if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
      strings: ["Websites", "Mobile Apps", "AI Solutions", "Digital Experiences"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }
});
