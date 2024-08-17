// Typing Effect
const typedText = document.querySelector('.typed-text');
const words = ["Ori Marx", "Software Engineer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typedText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 2000);
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

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});
