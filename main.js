// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenuIcon.classList.remove('fa-bars');
        mobileMenuIcon.classList.add('fa-times');
    } else {
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
    });
});

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number
        if (target % 1 !== 0) {
            // Decimal number
            element.textContent = current.toFixed(1);
        } else {
            // Whole number
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for Stats Animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseFloat(entry.target.dataset.target);
            animateCounter(entry.target, target);
        }
    });
}, observerOptions);

// Observe all stat numbers
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Intersection Observer for Fade-in Animations
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe sections for fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.loan-types, .benefits, .cta-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        fadeInObserver.observe(section);
    });
    
    // Animate individual cards and items with delay
    const loanCards = document.querySelectorAll('.loan-card');
    loanCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
        fadeInObserver.observe(card);
    });
    
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
        fadeInObserver.observe(item);
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const heroContent = hero.querySelector('.hero-container');
        const heroImage = hero.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 500);
        }
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.15}px) scale(${1 + scrolled * 0.0001})`;
        }
    }
});

// Add hover effect to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.loan-card, .benefit-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
});

// Animate floating orbs
document.addEventListener('DOMContentLoaded', () => {
    const orbs = document.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
        const randomX = Math.random() * 50 - 25;
        const randomY = Math.random() * 50 - 25;
        const randomDelay = Math.random() * 5;
        
        orb.style.animation = `float ${20 + index * 2}s infinite ease-in-out ${randomDelay}s`;
    });
});

// Form validation helper (for apply page)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function validateZipCode(zip) {
    const re = /^\d{5}(-\d{4})?$/;
    return re.test(zip);
}

// Export validation functions for use in other pages
window.formValidation = {
    validateEmail,
    validatePhone,
    validateZipCode
};

// Add loading state to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        if (button.tagName === 'BUTTON' || button.hasAttribute('data-submit')) {
            button.addEventListener('click', function(e) {
                if (this.hasAttribute('data-loading')) return;
                
                // Add loading state for submit buttons
                if (this.type === 'submit' || this.hasAttribute('data-submit')) {
                    const originalText = this.innerHTML;
                    this.setAttribute('data-loading', 'true');
                    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                    this.style.opacity = '0.7';
                    this.style.pointerEvents = 'none';
                    
                    // Remove loading state after a delay (in real app, remove after API response)
                    setTimeout(() => {
                        this.removeAttribute('data-loading');
                        this.innerHTML = originalText;
                        this.style.opacity = '1';
                        this.style.pointerEvents = 'auto';
                    }, 2000);
                }
            });
        }
    });
});

// Add active state to navigation based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.color = 'var(--red-600)';
            link.style.fontWeight = '600';
        }
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Toast notification system
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

window.showToast = showToast;

// Add CSS animations for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScroll = debounce(() => {
    // Any scroll-heavy operations can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);

console.log('Brighten Australia Pty Ltd - Main JS Loaded Successfully');
