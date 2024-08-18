// Dynamic Skill Bar Animation
const skills = document.querySelectorAll('.skill .progress-bar span');

window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (skillTop < windowHeight - 100) {
            skill.style.width = skill.dataset.skillLevel;
        }
    });
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Ori Marx. All rights reserved.`;

// Typing Effect for About Section
const aboutText = "I'm a high school student with a deep passion for technology, particularly in computer science and computer engineering. My journey began with a fascination for problem-solving, leading me to excel in application programming, software engineering, and data analysis. I thrive on challenges and am committed to leveraging my skills to innovate and create positive change in the world.";

let i = 0;
const typingSpeed = 50;

function typeWriter() {
    if (i < aboutText.length) {
        document.querySelector('#about .section-content p').textContent += aboutText.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = () => {
    typeWriter();
};

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌓';
darkModeToggle.className = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Typing Effect for About Section
const typingElement = document.querySelector('#about .section-content p');
typingElement.classList.add('typing-effect');
