// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add Intersection Observer for Animations
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Add Click Event for Buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

// Scroll Animation
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Scroll to Top';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Dynamic Content Loading
document.addEventListener('DOMContentLoaded', () => {
    const dynamicContent = `
        <section class="dynamic-content">
            <h2>Dynamic Content</h2>
            <p>This section is dynamically added to the page using JavaScript.</p>
        </section>
    `;
    document.body.insertAdjacentHTML('beforeend', dynamicContent);
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    if (name === '' || email === '') {
        alert('Please fill out all fields.');
    } else {
        alert(`Thank you for contacting us, ${name}!`);
    }
});

// Create Animated Elements
const createAnimatedElements = () => {
    for (let i = 0; i < 10; i++) {
        const animatedDiv = document.createElement('div');
        animatedDiv.classList.add('animated-item');
        document.body.appendChild(animatedDiv);
    }
};
createAnimatedElements();

// Hover Effects
document.querySelectorAll('.animated-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
    });
});

// Utility Functions
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return (...args) => {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

// Add Event Listeners for Dynamic Features
document.querySelectorAll('.dynamic-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Animation Trigger
const triggerAnimations = () => {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        element.classList.add('visible');
    });
};

document.addEventListener('scroll', throttle(triggerAnimations, 200));

// Initialize Elements
const initializeElements = () => {
    document.querySelectorAll('.scroll-animation').forEach(element => {
        element.classList.add('animate');
    });
};
initializeElements();
