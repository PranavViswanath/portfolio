// Time display functionality
function formatTime(date) {
  const options = { hour: 'numeric', minute: '2-digit' };
  let timeString = new Intl.DateTimeFormat(undefined, options).format(date);
  return timeString.replace('AM', 'am').replace('PM', 'pm');
}

function updateTime() {
  const timeElement = document.getElementById('time');
  if (timeElement) {
    timeElement.textContent = formatTime(new Date());
  }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  const elements = document.querySelectorAll('.timeline-item, .project-card, .contact-item');
  elements.forEach(el => {
    observer.observe(el);
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

// Mobile navigation toggle
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  let isOpen = false;

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      isOpen = !isOpen;
      if (isOpen) {
        navLinks.classList.add('mobile-open');
        toggle.classList.add('active');
      } else {
        navLinks.classList.remove('mobile-open');
        toggle.classList.remove('active');
        isOpen = false;
      }
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        toggle.classList.remove('active');
        isOpen = false;
      });
    });
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 60 * 1000);
  initSmoothScrolling();
  initScrollAnimations();
  initNavbarScroll();
  initMobileNav();
});
