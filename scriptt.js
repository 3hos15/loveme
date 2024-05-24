
console.log("Love Me");

// DOMContentloaded laat de funtie beginnen als de website volledig is geladen.
document.addEventListener('DOMContentLoaded', function() {
    let welcomeText = "Welcome to LOVE ME. With LOVE ME you can train your... loving skills! Click on the button (yes the big one down there) to start your loving journey :).";
    let aantalChar = 0; // hoeveel characters er te zien zijn
    let typingSpeed = 100; // snelheid van de characters die worden getypt
    let gameText = document.querySelector('#starttekst'); //element waar de tekst komt
    let gameLink = document.querySelector('.knop'); // link naar de game


    // checkt of er nog tekens over zijn om te typen door aantalChat te vergelijken met de lengte van welcomeText
    function typeText() {
        if (aantalChar < welcomeText.length) {
            gameText.textContent += welcomeText.charAt(aantalChar);
            // gameText.textContent = gameText.textContent + welcomeText.charAt(aantalChar); 
            // veranderd de (p) element naar de code hier onder
            aantalChar++;
            // aantalChar = aantalChar + 1; voegt per 1 characters toe
        } else {
            clearInterval(typingInterval); // als alle characters te zien zijn stopt het typen
            gameLink.style.display = 'flex'; // de link wordt van display:none naar display:flex veranderd zodat de link te zien is
            console.log("You can continue to the game!");
        }
    }

    let typingInterval = setInterval(typeText, typingSpeed); // voert de funtie elke 100ms uit (character die erbij komen)

    typeText(); // voert de funtie direct uit
});



let progressBar = document.querySelector('#health');
let progressPercent = document.querySelector('#heartpercent');
let heartImg = document.querySelector('#heart');

let buttons = document.querySelectorAll('button'); //selecteerd alle buttons uit de html

let currentImageIndex = 0;

const heartImages = [
    'heartone.png',
    'hearttwo.png',
    'heartthree.png',
    'heartfour.png',
    'heartfive.png',
    'heartsix.png',
    'heartseven.png',
    'hearteight.png',
    'heartnine.png',
    'heartten.png',
    'hearteleven.png'
];

const buttonEffects = {
    "ily": 10, // i love you - nice
    "ydg": 10, // you're doing great - nice
    "ihy": -10, // i hate you - not nice
    "yllt": 10, // you look lovely today - nice
    "yru": -10, // you're ugly - not nice
    "bts": 10 // beautiful smile - nice
};

function handleButtonClick(event) {
    const buttonId = event.target.id;
    const effect = buttonEffects[buttonId];

    // Calculate new value for the progress bar
    let newValue = parseInt(progressBar.value) + effect;
    if (newValue > 100) newValue = 100;
    if (newValue < 0) newValue = 0;

    // Update the progress bar and percentage text
    progressBar.value = newValue;
    progressPercent.textContent = newValue + '%';

    // Determine the appropriate image to display
    if (newValue > 0) {
        if (effect > 0) {
            // Increase the heart image index if a positive button is pressed
            currentImageIndex = (currentImageIndex + 1) % heartImages.length;
        } else if (effect < 0) {
            // Decrease the heart image index if a negative button is pressed
            if (currentImageIndex > 0) {
                currentImageIndex--;
            }
        }
        // Update the heart image based on the current index
        heartImg.src = `images/${heartImages[currentImageIndex]}`;
    } else {
        // If progress is zero, reset to the first image
        heartImg.src = 'images/heartone.png';
        currentImageIndex = 0;
    }

    // Reset everything if progress bar reaches 100%
    if (newValue === 100) {
        setTimeout(() => {
            progressBar.value = 0;
            progressPercent.textContent = '0%';
            heartImg.src = 'images/heartone.png';
            currentImageIndex = 0;
        }, 1000);
    }
}
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// ilyBtn.addEventListener('click', handleButtonClick);
// ydgBtn.addEventListener('click', handleButtonClick);
// ihyBtn.addEventListener('click', handleButtonClick);
// ylltBtn.addEventListener('click', handleButtonClick);
// yruBtn.addEventListener('click', handleButtonClick);
// btsBtn.addEventListener('click', handleButtonClick);