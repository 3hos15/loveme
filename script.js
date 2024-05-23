
console.log("Love Me");

document.addEventListener('DOMContentLoaded', function() {
    let welcomeText = "Welcome to LOVE ME. With LOVE ME you can train your... loving skills! Click on the button (yes the big one down there) to start your loving journey :).";
    let aantalChar = 0;
    let typingSpeed = 100;
    let gameText = document.querySelector('#starttekst');
    let gameLink = document.querySelector('.knop');

    function typeText() {
        if (aantalChar < welcomeText.length) {
            gameText.textContent += welcomeText.charAt(aantalChar);
            // gameText.textContent = gameText.textContent + welcomeText.charAt(aantalChar);
            aantalChar++;
            // aantalChar = aantalChar + 1;
        } else {
            clearInterval(typingInterval);
            gameLink.style.display = 'flex'; 
            console.log("You can continue to the game!")
        }
    }

    let typingInterval = setInterval(typeText, typingSpeed);

    typeText();
});