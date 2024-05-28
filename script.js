console.log("Love Me");

const homePage = document.querySelector('.home');

if (homePage) {
    let typingSound = new Audio('../audio/typing_sound.mp3');
    typingSound.loop = true;
    typingSound.play();

    let welcomeText = "Welcome to LOVE ME! With LOVE ME you can train your... loving skills! Enter your name and press start to activate your loving journey :).";
    let aantalChar = 0; // hoeveel characters er te zien zijn
    let typingSpeed = 60;
    let gameText = document.querySelector('#starttekst');
    let gameLink = document.querySelector('.knop');


    // checkt of er nog tekens over zijn om te typen door aantalChat te vergelijken met de lengte van welcomeText
    function typeText() {
        if (aantalChar < welcomeText.length) {
            gameText.textContent += welcomeText.charAt(aantalChar);
            aantalChar++;
        } else {
            clearInterval(typingInterval);
            gameLink.style.display = 'flex';
            typingSound.pause();
            console.log("You can continue to the game!");
        }
    }

    let typingInterval = setInterval(typeText, typingSpeed); // voert de funtie elke 60ms uit (character die erbij komen)
    typeText();
}



// https://stackoverflow.com/questions/35329180/localstorage-save-name-through-form-show-on-other-page
function callMe() {
    let name = document.getElementById('tbName').value;
    sessionStorage.setItem('userName', name);
}

document.getElementById('endtext').innerText = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";

let progressBar = document.querySelector('#health');
let progressPercent = document.querySelector('#heartpercent');
let heartImg = document.querySelector('#heart');

let buttons = document.querySelectorAll('button');

let currentImageIndex = 0;
let inactivityTimer;
let decreaseInterval;

let loveme = document.querySelector('#endtext');

let sparkleSound = new Audio('../audio/sparkle_sound.mp3');
sparkleSound.loop = false;

let clickSound = new Audio('../audio/click_sound.mp3');
clickSound.loop = false;

let clockSound = new Audio('../audio/ticking_clock.mp3');
clockSound.loop = false;

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
    "ily": 10, // i love you
    "ydg": 10, // you're doing great
    "ihy": -10, // i hate you
    "yllt": 10, // you look lovely today
    "yru": -10, // you're ugly
    "bts": 10 // beautiful smile
};

function handleButtonClick(event) {
    clearTimeout(inactivityTimer);
    clearInterval(decreaseInterval);
    clockSound.pause();

    const buttonId = event.target.id;
    const effect = buttonEffects[buttonId];

    let newValue = parseInt(progressBar.value) + effect; // Converts the string to a number
    if (newValue > 100) newValue = 100;
    if (newValue < 0) newValue = 0;

    progressBar.value = newValue;
    progressPercent.textContent = newValue + '%'; 

    updateHeartImage(effect);

    if (newValue === 100) {
        fullHeart();
    } else {
        startInactivityTimer(); 
    }
}

function updateHeartImage(effect) {
    if (progressBar.value > 0) {
        if (effect > 0) {
            currentImageIndex = Math.min(currentImageIndex + 1, heartImages.length - 1);
            console.log('Thats nice!');
            clickSound.play();
        } else if (effect < 0) {
            currentImageIndex = Math.max(currentImageIndex - 1, 0);
            console.log('Thats mean!');
            clickSound.play();
        }

        heartImg.src = `images/${heartImages[currentImageIndex]}`;
    } else {
        heartImg.src = 'images/heartone.png';
        currentImageIndex = 0;
    }
}

function fullHeart() {
    setTimeout(() => {
        loveme.textContent = "I love you " + sessionStorage.getItem('userName') + "!";
        sparkleSound.play();
        setTimeout(() => {
            progressBar.value = 0;
            progressPercent.textContent = '0%';
            heartImg.src = 'images/heartone.png';
            currentImageIndex = 0;
            loveme.textContent = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";
            startInactivityTimer();
        }, 1000);
    }, 1000);
    console.log('The game will restart!');
}

function startInactivityTimer() {
    inactivityTimer = setTimeout(() => {
        decreaseProgressGradually();
    }, 5000);
    loveme.textContent = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";
}

function decreaseProgressGradually() {
    decreaseInterval = setInterval(() => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            progressBar.value -= 10;
            progressPercent.textContent = progressBar.value + '%';
            heartImg.src = `images/${heartImages[currentImageIndex]}`;
            loveme.textContent = "No love anymore " + sessionStorage.getItem('userName') + "?";
            clockSound.play();
        } else {
            clearInterval(decreaseInterval);
            clockSound.pause();
        }
    }, 1000);
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

startInactivityTimer();
