console.log("Love Me")

// let health = document.querySelector("#health") //Vraag get element by ID
// health.value -= 30;

// const btn = document.querySelector("button")

// let textToType = "Welcome to LOVE ME. With LOVE ME you can train your... loving skills! ";
// let charIndex = 0;
// let typingSpeed = 100;
// let outputElement = document.getElementById('typing-effect');

// function typeText() {
//     if (charIndex < textToType.length) {
//         outputElement.textContent += textToType.charAt(charIndex);
//         charIndex++;
//     } else {
//         clearInterval(typingInterval);
//     }
// }

// let typingInterval = setInterval(typeText, typingSpeed);

// btn.addEventListener("click", typeText)

document.addEventListener('DOMContentLoaded', function() {
    let textToType = "Welcome to LOVE ME. With LOVE ME you can train your... loving skills! Click on the button (yes the big one down there) to start your loving journey :).";
    let charIndex = 0;
    let typingSpeed = 100;
    let outputElement = document.querySelector('#starttekst');

    function typeText() {
        if (charIndex < textToType.length) {
            outputElement.textContent += textToType.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
        }
    }

    let typingInterval = setInterval(typeText, typingSpeed);

    // Start the typing effect immediately after the page loads
    typeText();
});
