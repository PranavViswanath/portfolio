// Time display functionality
class TimeDisplay {
  private timeElement: HTMLElement | null = null;
  private intervalId: number | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    this.timeElement = document.getElementById('time');
    if (this.timeElement) {
      this.updateTime();
      this.startInterval();
    }
  }

  private formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { 
      hour: 'numeric', 
      minute: '2-digit' 
    };
    let timeString = new Intl.DateTimeFormat(undefined, options).format(date);
    // Lowercase AM/PM if present
    return timeString.replace('AM', 'am').replace('PM', 'pm');
  }

  private updateTime(): void {
    if (this.timeElement) {
      this.timeElement.textContent = this.formatTime(new Date());
    }
  }

  private startInterval(): void {
    this.intervalId = window.setInterval(() => {
      this.updateTime();
    }, 60 * 1000); // Update every minute
  }

  public destroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Smooth scrolling for navigation links
class SmoothScroller {
  private navLinks: NodeListOf<HTMLAnchorElement>;

  constructor() {
    this.navLinks = document.querySelectorAll('a[href^="#"]');
    this.init();
  }

  private init(): void {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          this.scrollToSection(targetId);
        }
      });
    });
  }

  private scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}

// Intersection Observer for animations
class ScrollAnimations {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
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
    this.init();
  }

  private init(): void {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .contact-item');
    elements.forEach(el => {
      this.observer.observe(el);
    });
  }
}

// Navbar scroll effect
class NavbarScroll {
  private navbar: HTMLElement | null = null;

  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.init();
  }

  private init(): void {
    if (this.navbar) {
      window.addEventListener('scroll', () => {
        this.handleScroll();
      });
    }
  }

  private handleScroll(): void {
    if (this.navbar) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }
  }
}

// Mobile navigation toggle
class MobileNav {
  private toggle: HTMLElement | null = null;
  private navLinks: HTMLElement | null = null;
  private isOpen: boolean = false;

  constructor() {
    this.toggle = document.querySelector('.nav-toggle');
    this.navLinks = document.querySelector('.nav-links');
    this.init();
  }

  private init(): void {
    if (this.toggle && this.navLinks) {
      this.toggle.addEventListener('click', () => {
        this.toggleMenu();
      });

      // Close menu when clicking on a link
      const links = this.navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          this.closeMenu();
        });
      });
    }
  }

  private toggleMenu(): void {
    if (this.navLinks && this.toggle) {
      this.isOpen = !this.isOpen;
      
      if (this.isOpen) {
        this.navLinks.classList.add('mobile-open');
        this.toggle.classList.add('active');
      } else {
        this.closeMenu();
      }
    }
  }

  private closeMenu(): void {
    if (this.navLinks && this.toggle) {
      this.navLinks.classList.remove('mobile-open');
      this.toggle.classList.remove('active');
      this.isOpen = false;
    }
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TimeDisplay();
  new SmoothScroller();
  new ScrollAnimations();
  new NavbarScroll();
  new MobileNav();
});

// Add CSS for mobile navigation
const mobileNavStyles = `
  @media (max-width: 768px) {
    .nav-links {
      position: fixed;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      flex-direction: column;
      padding: 2rem;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      border-top: 1px solid var(--gray-200);
    }
    
    .nav-links.mobile-open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
    
    .nav-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
  
  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .timeline-item, .project-card, .contact-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  
  .timeline-item.animate-in, .project-card.animate-in, .contact-item.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Inject mobile navigation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileNavStyles;
document.head.appendChild(styleSheet);
