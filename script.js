// REFERENCES

// grab the letter we need from the html and give them properties

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

// generate a random number between 1 - 5

// make sure it's not the same as the current number

// remember that number

// change the image