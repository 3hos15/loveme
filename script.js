// console.log("Love Me");



// let homePage = document.querySelector('.home');

// if (homePage) {
//     let typingSound = new Audio('../audio/typing_sound.mp3');
//     typingSound.loop = true; 
//     typingSound.play(); 

//     let welcomeText = "Welcome to LOVE ME. With LOVE ME you can train your... loving skills! Click on the button to start your loving journey :).";
//     let aantalChar = 0; // hoeveel characters er te zien zijn
//     let typingSpeed = 60;
//     let gameText = document.querySelector('#starttekst');
//     let gameLink = document.querySelector('.knop');

//     // Check if gameText and gameLink elements exist
//     if (gameText && gameLink) {
//         // checkt of er nog tekens over zijn om te typen door aantalChat te vergelijken met de lengte van welcomeText
//         function typeText() {
//             if (aantalChar < welcomeText.length) {
//                 gameText.textContent += welcomeText.charAt(aantalChar);
//                 // gameText.textContent = gameText.textContent + welcomeText.charAt(aantalChar); 
//                 aantalChar++;
//                 // aantalChar = aantalChar + 1; voegt per 1 characters toe
//             } else {
//                 clearInterval(typingInterval); 
//                 gameLink.style.display = 'flex';
//                 typingSound.pause();
//                 console.log("You can continue to the game!");
//             }
//         }

//         let typingInterval = setInterval(typeText, typingSpeed); // voert de funtie elke 1500ms uit (character die erbij komen)
//         typeText();
//     }
// }

// function callMe(){
//     var name = document.getElementById('tbName').value;
//     sessionStorage.setItem('userName', name);
// }

// window.onload = function() {
//     document.getElementById('endtext').innerText = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";
// };


// let progressBar = document.querySelector('#health');
// let progressPercent = document.querySelector('#heartpercent');
// let heartImg = document.querySelector('#heart');

// let buttons = document.querySelectorAll('button');

// let currentImageIndex = 0;

// let loveme = document.querySelector('#endtext')

// let sparkleSound = new Audio('../audio/sparkle_sound.mp3');
// sparkleSound.loop = false; 
// // sparkleSound.play(); 

// let clickSound = new Audio('../audio/click_sound.mp3');
// clickSound.loop = false; 
// // clickSound.play();

// const heartImages = [
//     'heartone.png',
//     'hearttwo.png',
//     'heartthree.png',
//     'heartfour.png',
//     'heartfive.png',
//     'heartsix.png',
//     'heartseven.png',
//     'hearteight.png',
//     'heartnine.png',
//     'heartten.png',
//     'hearteleven.png'
// ]; //array, de fotos zijn gerangschikt van leeg naar vol

// const buttonEffects = {
//     "ily": 10, // i love you
//     "ydg": 10, // you're doing great
//     "ihy": -10, // i hate you 
//     "yllt": 10, // you look lovely today 
//     "yru": -10, // you're ugly 
//     "bts": 10 // beautiful smile
// }; //past een berekening van -10 of +10 toe als er of de button met genoemde ID wordt gedrukt


// // const p = document.createElement('p')

// function handleButtonClick(event) { 
//     const buttonId = event.target.id; //zoekt voor de ID van de geklikte button
//     const effect = buttonEffects[buttonId];

//     let newValue = parseInt(progressBar.value) + effect; //parseInt veranderd de string naar een nummer
//     if (newValue > 100) newValue = 100;
//     if (newValue < 0) newValue = 0;

//     progressBar.value = newValue; 
//     progressPercent.textContent = newValue + '%'; // Update de progress bar

//     if (newValue > 0) {
//         if (effect > 0) {
//             currentImageIndex = (currentImageIndex + 1) % heartImages.length;
//             clickSound.play(); 
//         } else if (effect < 0) 
//              {

//             if (currentImageIndex > 0) {
//                 currentImageIndex--;
//             }
//             clickSound.play(); 
//         }
    
//         heartImg.src = `images/${heartImages[currentImageIndex]}`;
//     } else {
//         heartImg.src = 'images/heartone.png';
//         currentImageIndex = 0;
//     }

//     if (newValue === 100) {
//         setTimeout(() => {
//             progressBar.value = 0;
//             progressPercent.textContent = '0%';
//             heartImg.src = 'images/heartone.png';
//             currentImageIndex = 0;
//             loveme.textContent = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";
//         }, 1000);
//         console.log('The game will restart!')
//         loveme.textContent = "I love you " + sessionStorage.getItem('userName') + "!";
//         sparkleSound.play(); 
//     }
// }

// buttons.forEach(button => {
//     button.addEventListener('click', handleButtonClick);
// });

// // buttons.forEach(function(button) {
// //     button.addEventListener('click', handleButtonClick);
// // });



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

    // Check if gameText and gameLink elements exist
    if (gameText && gameLink) {
        // checkt of er nog tekens over zijn om te typen door aantalChat te vergelijken met de lengte van welcomeText
        function typeText() {
            if (aantalChar < welcomeText.length) {
                gameText.textContent += welcomeText.charAt(aantalChar);
                // gameText.textContent = gameText.textContent + welcomeText.charAt(aantalChar); 
                aantalChar++;
                // aantalChar = aantalChar + 1; voegt per 1 characters toe
            } else {
                clearInterval(typingInterval); 
                gameLink.style.display = 'flex';
                typingSound.pause();
                console.log("You can continue to the game!");
            }
        }

        let typingInterval = setInterval(typeText, typingSpeed); // voert de funtie elke 1500ms uit (character die erbij komen)
        typeText();
    }
}

function callMe(){
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

let loveme = document.querySelector('#endtext')

let sparkleSound = new Audio('../audio/sparkle_sound.mp3');
sparkleSound.loop = false; 

let clickSound = new Audio('../audio/click_sound.mp3');
clickSound.loop = false; 

let clockSound = new Audio('../audio/ticking_clock.mp3');
clockSound.loop = false; 
// clockSound.play(); 

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
]; //array, de fotos zijn gerangschikt van leeg naar vol

const buttonEffects = {
    "ily": 10, // i love you
    "ydg": 10, // you're doing great
    "ihy": -10, // i hate you 
    "yllt": 10, // you look lovely today 
    "yru": -10, // you're ugly 
    "bts": 10 // beautiful smile
}; //past een berekening van -10 of +10 toe als er of de button met genoemde ID wordt gedrukt

function handleButtonClick(event) { 
    clearTimeout(inactivityTimer);
    clearInterval(decreaseInterval);
    clockSound.pause();

    const buttonId = event.target.id; // Identifies the ID of the clicked button
    const effect = buttonEffects[buttonId];

    let newValue = parseInt(progressBar.value) + effect; // Converts the string to a number
    if (newValue > 100) newValue = 100;
    if (newValue < 0) newValue = 0;

    progressBar.value = newValue; 
    progressPercent.textContent = newValue + '%'; // Updates the progress bar

    updateHeartImage(effect);

    if (newValue === 100) {
        fullHeart();
    }

    startInactivityTimer(); // Restart the inactivity timer after action
}

function updateHeartImage(effect) {
    if (progressBar.value > 0) {
        if (effect > 0) {
            currentImageIndex = Math.min(currentImageIndex + 1, heartImages.length - 1);
            console.log('Thats nice!')
            clickSound.play();
        } else if (effect < 0) {
            currentImageIndex = Math.max(currentImageIndex - 1, 0);
            console.log('Thats mean!')
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
        progressBar.value = 0;
        progressPercent.textContent = '0%';
        heartImg.src = 'images/heartone.png';
        currentImageIndex = 0;
        loveme.textContent = "Do you know how to love, " + sessionStorage.getItem('userName') + "?";
    }, 1000);
    console.log('The game will restart!')
    loveme.textContent = "I love you " + sessionStorage.getItem('userName') + "!";
    sparkleSound.play(); 
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
