// =============================
// MUSIC
// =============================

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let playing = true;

music.volume = 0.55;

musicButton.onclick = () => {

    if (playing) {

        music.pause();
        musicButton.innerHTML = "🔇";
        playing = false;

    } else {

        music.play();
        musicButton.innerHTML = "🎵";
        playing = true;

    }

};

// =============================
// START BUTTON
// =============================

const startBtn = document.getElementById("startJourney");

if(startBtn){

startBtn.onclick = ()=>{

document.getElementById("chapter1").scrollIntoView({

behavior:"smooth"

});

}

}

// =============================
// HEARTS
// =============================

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(16+Math.random()*20)+"px";

heart.style.color="#ff5c9d";

heart.style.opacity=Math.random();

heart.style.animation=`floatHeart ${6+Math.random()*5}s linear forwards`;

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

}

setInterval(createHeart,350);

// =============================
// PETALS
// =============================

const petals=document.getElementById("petals");

function createPetal(){

const flower=document.createElement("div");

flower.innerHTML="🌸";

flower.style.position="absolute";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-50px";

flower.style.fontSize=(18+Math.random()*18)+"px";

flower.style.animation=`fall ${7+Math.random()*6}s linear forwards`;

petals.appendChild(flower);

setTimeout(()=>{

flower.remove();

},13000);

}

setInterval(createPetal,450);

// =============================
// SPARKLES
// =============================

const sparkles=document.getElementById("sparkles");

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="absolute";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(10+Math.random()*10)+"px";

star.style.opacity=Math.random();

sparkles.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(sparkle,250);
// =============================
// CINEMATIC INTRO
// =============================

const intro=document.getElementById("introScreen");

const introText=document.getElementById("introText");

const sentence="A little surprise for the most beautiful girl in my life... ❤️";

let i=0;

function type(){

if(i<sentence.length){

introText.innerHTML+=sentence.charAt(i);

i++;

setTimeout(type,65);

}

}

type();

setTimeout(()=>{

intro.classList.add("hide");

music.play().catch(()=>{});

},5500);
// ==========================
// Envelope
// ==========================

const envelope=document.getElementById("envelope");

const openLetter=document.getElementById("openLetter");

openLetter.onclick=()=>{

envelope.classList.toggle("open");

if(envelope.classList.contains("open")){

openLetter.innerHTML="❤️ I Love You Forever ❤️";

}else{

openLetter.innerHTML="💌 Open My Letter";

}

}
// =============================
// MUSIC PLAYER
// =============================

const music = document.getElementById("bgMusic");

const songs = [
    "music/song1.mp3",
    "music/song2.mp3",
    "music/song3.mp3",
    "music/song4.mp3",
    "music/song5.mp3",
    "music/song6.mp3",
    "music/song7.mp3",
    "music/song8.mp3"
];

let currentSong = 0;
let playing = true;

music.src = songs[0];
music.volume = 0.55;

music.play().catch(()=>{});

const musicButton = document.getElementById("musicButton");

musicButton.onclick = () => {

    if(playing){

        music.pause();
        musicButton.innerHTML="🔇";
        playing=false;

    }else{

        music.play();
        musicButton.innerHTML="🎵";
        playing=true;

    }

};

},{
threshold:.55
});

sections.forEach(id=>{

const section=document.getElementById(id);

if(section){

observer.observe(section);

}

});
