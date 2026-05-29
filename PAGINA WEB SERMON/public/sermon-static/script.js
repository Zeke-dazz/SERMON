// ==================== MOBILE MENU ====================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = menuToggle.querySelector('.menu-icon');
const closeIcon = menuToggle.querySelector('.close-icon');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// ==================== HERO SLIDER ====================
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
  clearInterval(slideInterval);
}

// Click on indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    stopSlider();
    showSlide(index);
    startSlider();
  });
});

// Start slider
startSlider();

// ==================== HEADER SCROLL EFFECT ====================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  
  // Here you can add your form submission logic
  // For example, send to an API or email service
  
  // Show success message (you can customize this)
  alert('¡Gracias por contactarnos! Nos comunicaremos con usted pronto.');
  
  // Reset form
  this.reset();
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.5s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Animate about section
const aboutImage = document.querySelector('.about-image');
const aboutContent = document.querySelector('.about-content');

if (aboutImage) {
  aboutImage.style.opacity = '0';
  aboutImage.style.transform = 'translateX(-30px)';
  aboutImage.style.transition = 'all 0.6s ease';
  observer.observe(aboutImage);
}

if (aboutContent) {
  aboutContent.style.opacity = '0';
  aboutContent.style.transform = 'translateX(30px)';
  aboutContent.style.transition = 'all 0.6s ease 0.2s';
  observer.observe(aboutContent);
}

// Animate contact sections
const contactInfo = document.querySelector('.contact-info');
const contactFormWrapper = document.querySelector('.contact-form-wrapper');

if (contactInfo) {
  contactInfo.style.opacity = '0';
  contactInfo.style.transform = 'translateY(30px)';
  contactInfo.style.transition = 'all 0.6s ease';
  observer.observe(contactInfo);
}

if (contactFormWrapper) {
  contactFormWrapper.style.opacity = '0';
  contactFormWrapper.style.transform = 'translateY(30px)';
  contactFormWrapper.style.transition = 'all 0.6s ease 0.2s';
  observer.observe(contactFormWrapper);
}

// ==================== ACTIVE NAV LINK ====================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.style.color = '#c94a35';
        } else {
          link.style.color = '';
        }
      });
    }
  });
});

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + '+';
    }
  }
  
  updateCounter();
}

// Animate stats when in view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number, .about-stat-number');
      statNumbers.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        if (number && !stat.classList.contains('animated')) {
          stat.classList.add('animated');
          animateCounter(stat, number);
        }
      });
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
const aboutStats = document.querySelector('.about-stats');

if (heroStats) statsObserver.observe(heroStats);
if (aboutStats) statsObserver.observe(aboutStats);
