// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger to X
    hamburger.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Skill Bar Animation on Scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible && !bar.classList.contains('animated')) {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
      bar.classList.add('animated');
    }
  });
};

// Run on scroll
window.addEventListener('scroll', animateSkillBars);
// Run on load
window.addEventListener('load', animateSkillBars);

// Fade-in Animation on Scroll for Cards
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

// Observe all cards
const cards = document.querySelectorAll('.project-card, .certification-item, .certification-card, .project-detail');
cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Sticky Header Effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.padding = '0.5rem 0';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.padding = '1rem 0';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject')?.value || 'Portfolio Contact';
    const message = document.getElementById('message').value;
    
    // Show loading state
    formResponse.style.color = '#0066cc';
    formResponse.textContent = 'Sending message...';
    
    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
      formResponse.style.color = '#28a745';
      formResponse.textContent = 'Thank you! Your message has been sent successfully.';
      contactForm.reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        formResponse.textContent = '';
      }, 5000);
    }, 1500);
    
    // For actual implementation, use EmailJS or similar service:
    /*
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message })
      });
      
      if (response.ok) {
        formResponse.style.color = '#28a745';
        formResponse.textContent = 'Thank you! Your message has been sent successfully.';
        contactForm.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      formResponse.style.color = '#dc3545';
      formResponse.textContent = 'Oops! Something went wrong. Please try again or email directly.';
    }
    */
  });
}

// Back to Top Button (optional enhancement)
const createBackToTop = () => {
  const button = document.createElement('button');
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = 'back-to-top';
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  `;
  
  document.body.appendChild(button);
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });
  
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  button.addEventListener('mouseenter', () => {
    button.style.background = '#004d99';
    button.style.transform = 'translateY(-3px)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.background = '#0066cc';
    button.style.transform = 'translateY(0)';
  });
};

// Initialize back to top button
createBackToTop();

// Form Input Animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.style.transform = 'scale(1.02)';
  });
  
  input.addEventListener('blur', () => {
    input.parentElement.style.transform = 'scale(1)';
  });
});

// Project Tags Hover Effect
const projectTags = document.querySelectorAll('.tag, .tech-tag, .project-tag');

projectTags.forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.transform = 'scale(1.1)';
    tag.style.transition = 'transform 0.2s ease';
  });
  
  tag.addEventListener('mouseleave', () => {
    tag.style.transform = 'scale(1)';
  });
});

// Console Message
console.log('%cWelcome to Sithembile Ndlela\'s Portfolio!', 'color: #0066cc; font-size: 20px; font-weight: bold;');
console.log('%cInterested in collaboration? Reach out at tozindlela@gmail.com', 'color: #333; font-size: 14px;');

// Initialize all animations on page load
window.addEventListener('load', () => {
  // Add loaded class to body for any CSS transitions
  document.body.classList.add('loaded');
  
  // Trigger skill bar animations
  animateSkillBars();
});

// Prevent animation on page resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Reset any size-dependent animations
    console.log('Window resized');
  }, 250);
});