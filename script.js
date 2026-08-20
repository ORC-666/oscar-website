// preload buttons and quick images

const imagesToPreload = [
    "images/radio/playbutton_mouseover.png",
    "images/radio/pausebutton_mouseover.png",
    "images/radio/pausebutton_pressed.png",
    "images/radio/playbutton_pressed.png",
    "images/radio/playbutton_selected.png",
    "images/radio/pausebutton_selected.png",
    "images/o1.png",
    "images/o2.png",
    "images/o3.png",
    "images/o4.png",
    "images/o5.png",
    "images/r1.png",
    "images/r2.png",
    "images/r3.png",
    "images/r4.png",
    "images/r5.png",
    "images/c1.png",
    "images/c2.png",
    "images/c3.png",
    "images/c4.png",
    "images/c5.png"
];

imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
});

// get the letter from the html and give it some info

const letters = [
{
    element: document.getElementById("letter-o"),
    name: "o",
    current: 1
},
{
    element: document.getElementById("letter-r"),
    name: "r",
    current: 1
},
{
    element: document.getElementById("letter-c"),
    name: "c",
    current: 1
}
];

// settings for the animation, how many letter variations and the delay window

const numberOfVariations = 5;
const minimumDelay = 1000;
const maximumDelay = 1000;

// Letter changing functions

function pickRandomLetter() {

    // pick a random time and a random letter

    let randomDelay = Math.floor(Math.random() * (maximumDelay - minimumDelay)) + minimumDelay;
    let randomIndex = Math.floor(Math.random() * letters.length);
    // let randomLetter = letters[randomIndex];

    // run the functions and then add the time to delay the next one

    setTimeout(function(){

        changeLetter(letters[randomIndex]);
        pickRandomLetter();

    }, randomDelay);

    // letterSound.play();

    // changeLetter(randomLetter);
};

function changeLetter(letter) {

    // create a random number between 1 and 5 (number of images)

    let newLetter = Math.floor(Math.random() * numberOfVariations) + 1;

        // if the chosen number is the same as the current number choose a new random number

        while (newLetter === letter.current){
            newLetter = Math.floor(Math.random() * numberOfVariations) + 1;
        }

        // change the image if the number is different

        letter.current = newLetter;
        letter.element.src = "images/" + letter.name + letter.current + ".png";

};

pickRandomLetter();

// -----------------------------------------------------------------
// RADIO
// -----------------------------------------------------------------

// connect buttons to html

const playButton = document.getElementById("radio-play");
const pauseButton = document.getElementById("radio-pause");
const radioButton = document.querySelectorAll(".radio-button");

// list songs

const songs = [

    {src: "audio/songs/01 As Good As Dead.mp3",
    title: "O.R.C - As Good As Dead"},

    {src:"audio/songs/02 Mile High Club.mp3",
    title: "O.R.C - Mile High Club"},

    {src: "audio/songs/03 The Earth Looks Flat To A Falling Person.mp3",
    title: "O.R.C - The Earth Looks Flat To A Falling Person"},

    {src: "audio/songs/04 Plane Seat Dominoes.mp3",
    title: "O.R.C - Plane Seat Dominoes"},

    {src: "audio/songs/An Odyssey Of Errors.wav",
    title: "O.R.C - An Odyssey Of Errors"},

    {src: "audio/songs/Dungeon Delve.wav",
    title: "O.R.C - Dungeon Delve"},

    {src: "audio/songs/Goid.wav",
    title: "O.R.C - Goid"},

    {src: "audio/songs/mosquito_bite.wav",
    title: "O.R.C - Mosquito Bite"},

    {src: "audio/songs/portasound.mp3",
    title: "O.R.C - Portaloo"},

    {src:"audio/songs/self_proclaimed_narcissist.wav",
    title: "O.R.C - Self Proclaimed Narcissist"},

    {src: "audio/songs/soft_inside_me.mp3",
    title: "O.R.C - Soft Around Me"},

    {src: "audio/songs/The Catacombs.wav",
    title: "O.R.C - The Catacombs"}

];

const songTitle = document.getElementById("song-title");

// audio player

const audioPlayer = new Audio();
let radioStarted = false;
audioPlayer.addEventListener("ended", function(){
    pickRandomSong();
})

// radio button functions

// hover sound for any button on the radio

const hoverSound = new Audio("audio/littleclick.mp3");

radioButton.forEach(function(button) {
    button.addEventListener("pointerdown", function() {
        hoverSound.play();
    })
});

// button functions

const radioPlay = new Audio("audio/radio_play.wav");

playButton.addEventListener("pointerup", function() {
    
    playButton.classList.add("selected");
    pauseButton.classList.remove("selected");
    radioPlay.play();

    if (radioStarted === false) {
        pickRandomSong();
        radioStarted = true;
    } else {
        audioPlayer.play();
    }

});

pauseButton.addEventListener("pointerup", function() {
    
    pauseButton.classList.add("selected");
    playButton.classList.remove("selected");
    radioPlay.play();

    audioPlayer.pause();

});

// random song picker

let previousSong;

function pickRandomSong() {

    let randomSong = Math.floor(Math.random() * songs.length);

    while (randomSong === previousSong) {
        randomSong = Math.floor(Math.random() * songs.length);
    };

    songTitle.textContent = songs[randomSong].title;

    audioPlayer.src = songs[randomSong].src;
    audioPlayer.play();

};

// orc bio face

const faceAnimations = [
    {
    src: "images/orc_face_blink.gif",
    duration: 300
    },
    {
    src: "images/orc_face_blink.gif",
    duration: 300
    },
    {
    src: "images/orc_face_blink.gif",
    duration: 300
    },
    {
    src: "images/orc_face_blink.gif",
    duration: 300
    },
    {
    src: "images/orc_face_scratch.gif",
    duration: 1400
    }
];

const randomFaceDelaymin = 2000;
const randomFaceDelaymax = 5000;
const orcFace = document.getElementById("orc-face");

function changeFace() {

    let randomFaceDelay = 
        Math.floor(Math.random() * (randomFaceDelaymax - randomFaceDelaymin)) + randomFaceDelaymin;

    let randomFace = Math.floor(Math.random() * faceAnimations.length);

    setTimeout(function(){
        orcFace.src = faceAnimations[randomFace].src;

        setTimeout(function(){
        orcFace.src = "images/orc_face.png"

        changeFace();

        }, 
        
        faceAnimations[randomFace].duration)

    }, randomFaceDelay);

    console.log(faceAnimations[randomFace].src); 

};

changeFace();