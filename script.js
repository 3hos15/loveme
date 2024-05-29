console.log("Love Me");

const homePage = document.querySelector('.home');

if (homePage) {
    let typingSound = new Audio('../audio/typing_sound.mp3');
    typingSound.loop = true;
    typingSound.play();

    let welcomeText = "Welcome to LOVE ME! With LOVE ME you can train your... loving skills! Enter your name and press start to activate your loving journey :).";
    let numChar = 0; // hoeveel characters er te zien zijn
    let typingSpeed = 60;
    let gameText = document.querySelector('#starttekst');
    let gameLink = document.querySelector('.knop');


    // checkt of er nog tekens over zijn om te typen door numChar te vergelijken met de lengte van welcomeText
    function typeText() {
        if (numChar < welcomeText.length) {
            gameText.textContent += welcomeText.charAt(numChar);
            numChar++;
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
function saveName() {
    let name = document.querySelector('#tbName').value;
    sessionStorage.setItem('userName', name);
}

document.querySelector('#endtext').innerText = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";

let progressBar = document.querySelector('#health');
let progressPercent = document.querySelector('#heartpercent');
let heartImg = document.querySelector('#heart');

let buttons = document.querySelectorAll('button');

let currentHeartPic = 0;
let inactivityTimer;
let decreaseInterval;

let loveme = document.querySelector('#endtext');

const sparkleSound = new Audio('../audio/sparkle_sound.mp3');
sparkleSound.loop = false;

const clickSound = new Audio('../audio/click_sound.mp3');
clickSound.loop = false;

const clockSound = new Audio('../audio/ticking_clock.mp3');
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

function buttonClick(event) {
    clearTimeout(inactivityTimer);
    clearInterval(decreaseInterval);
    clockSound.pause();

    const buttonId = event.target.id;
    const effect = buttonEffects[buttonId];

    let newValue = parseInt(progressBar.value) + effect;
    if (newValue > 100) newValue = 100;
    if (newValue < 0) newValue = 0;

    progressBar.value = newValue;
    progressPercent.textContent = newValue + '%'; 

    updateHeartImage(effect);

    if (newValue === 100) {
        fullHeart();
    } else {
        timerInactivity(); 
    }
}

function updateHeartImage(effect) {
    if (progressBar.value > 0) {
        if (effect > 0) {
            currentHeartPic = Math.min(currentHeartPic + 1, heartImages.length - 1);
            console.log('Thats nice!');
            clickSound.play();
        } else if (effect < 0) {
            currentHeartPic = Math.max(currentHeartPic - 1, 0);
            console.log('Thats mean!');
            clickSound.play();
        }
        heartImg.src = `images/${heartImages[currentHeartPic]}`;
    } else {
        heartImg.src = 'images/heartone.png';
        currentHeartPic = 0;
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
            currentHeartPic = 0;
            loveme.textContent = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";
            timerInactivity();
        }, 1000);
    }, 1000);
    console.log('The game will restart!');
}

function timerInactivity() {
    inactivityTimer = setTimeout(() => {
        decreaseProgress();
    }, 5000);
    loveme.textContent = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";
}

function decreaseProgress() {
    decreaseInterval = setInterval(() => {
        if (currentHeartPic > 0) {
            currentHeartPic--;
            progressBar.value -= 10;
            progressPercent.textContent = progressBar.value + '%';
            heartImg.src = `images/${heartImages[currentHeartPic]}`;
            loveme.textContent = "No love anymore " + sessionStorage.getItem('userName') + "?";
            clockSound.play();
        } else {
            clearInterval(decreaseInterval);
            clockSound.pause();
        }
    }, 1000);
}

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});

timerInactivity();