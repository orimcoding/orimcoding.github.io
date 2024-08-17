// Typing Effect
const typedText = document.querySelector('.typed-text');
const words = ["Ori Marx", "Aspiring Software Engineer", "Tech Enthusiast", "High School Student"];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typedText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Background Gradient Animation
function changeBackground() {
    const body = document.body;
    const gradients = [
        'linear-gradient(135deg, #000428, #004e92)',
        'linear-gradient(135deg, #004e92, #000428)',
        'linear-gradient(135deg, #000428, #4b6cb7)',
        'linear-gradient(135deg, #4b6cb7, #182848)',
    ];
    let current = 0;

    setInterval(() => {
        body.style.background = gradients[current];
        current = (current + 1) % gradients.length;
    }, 5000);
}

changeBackground();
