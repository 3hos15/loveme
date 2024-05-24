
console.log("Love Me");

// DOMContentloaded laat de funtie beginnen als de website volledig is geladen.
document.addEventListener('DOMContentLoaded', function() {
    let typingSound = new Audio('../audio/typing_sound.mp3'); // Create an Audio object with the sound file path
    typingSound.loop = true; // Set loop property to true
    typingSound.play(); // Play the sound

    let welcomeText = "Welcome to LOVE ME. With LOVE ME you can train your... loving skills! Click on the button (it will appear in a sec) to start your loving journey :).";
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
            typingSound.pause();
            console.log("You can continue to the game!");
        }
    }

    let typingInterval = setInterval(typeText, typingSpeed); // voert de funtie elke 100ms uit (character die erbij komen)

    typeText(); // voert de funtie direct uit
});





let progressBar = document.querySelector('#health');
let progressPercent = document.querySelector('#heartpercent');
let heartImg = document.querySelector('#heart');

let buttons = document.querySelectorAll('button');

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
]; //namen van de bestanden van de fotos die gebruikt worden

const buttonEffects = {
    "ily": 10, // i love you
    "ydg": 10, // you're doing great
    "ihy": -10, // i hate you 
    "yllt": 10, // you look lovely today 
    "yru": -10, // you're ugly 
    "bts": 10 // beautiful smile
}; //past een berekening van -10 of +10 toe als er of de button met genoemde ID wordt gedrukt

function handleButtonClick(event) {
    const buttonId = event.target.id; //zoekt voor de ID van de geklikte button
    const effect = buttonEffects[buttonId]; // past de effect toe van de code hierboven

    // Calculate new value for the progress bar
    let newValue = parseInt(progressBar.value) + effect; //parseInt veranderd de string naar een nummer
    if (newValue > 100) newValue = 100;
    if (newValue < 0) newValue = 0;

    progressBar.value = newValue; 
    progressPercent.textContent = newValue + '%'; // Update de progress bar

    // zoekt de goede foto om te laten zien
    if (newValue > 0) {
        if (effect > 0) {
            // hart foto wordt gevuld als er een positieve knopt wordt gedrukt
            currentImageIndex = (currentImageIndex + 1) % heartImages.length;
        } else if (effect < 0) {
            // hart foto minder gevuld als er een negatieve knopt wordt gedrukt
            // de index van de foto's gaat hierbij omhoog of omlaag, de fotos zijn gerangschikt van leeg naar vol
            if (currentImageIndex > 0) {
                currentImageIndex--;
            }
        }
        // Update het hart
        heartImg.src = `images/${heartImages[currentImageIndex]}`;
    } else {
        heartImg.src = 'images/heartone.png';
        currentImageIndex = 0; //leeg hart als procent 0
    }

    
    if (newValue === 100) {
        setTimeout(() => {
            progressBar.value = 0;
            progressPercent.textContent = '0%';
            heartImg.src = 'images/heartone.png';
            currentImageIndex = 0;
        }, 1000); //reset alles wanneer de progress bar 100% bereikt
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});


// buttons.forEach(function(button) {
//     button.addEventListener('click', handleButtonClick);
// });