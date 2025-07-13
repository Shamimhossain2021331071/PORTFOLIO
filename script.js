// Smooth highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});

// Testimonial carousel
const testimonials = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) t.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

// Initialize first testimonial
showTestimonial(currentIndex);

// ScrollReveal animations
ScrollReveal().reveal('.section h1, .section h2', { delay: 200, origin: 'top', distance: '40px', duration: 700 });
ScrollReveal().reveal('.section p, .skills-grid, .projects-grid, .education-list, .testimonials-carousel, .blog-list', { delay: 400, origin: 'bottom', distance: '30px', duration: 800 });
ScrollReveal().reveal('#about img, #achievements img', { delay: 500, origin: 'left', distance: '50px', duration: 800 });
ScrollReveal().reveal('.skill, .project, .education-item, .testimonial-item, .blog-list article', { interval: 150, delay: 600, origin: 'bottom', distance: '20px', duration: 600 });
