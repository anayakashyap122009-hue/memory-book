// ======================================
// MEMORY BOOK ❤️ SCRIPT.JS
// ======================================


// ===============================
// INTRO SCREEN
// ===============================

const introText = document.getElementById("introText");

const introMessage =
"Happy Girlfriend's Day My Love ❤️";


let introIndex = 0;


function typeIntro(){

    if(introIndex < introMessage.length){

        introText.innerHTML += introMessage.charAt(introIndex);

        introIndex++;

        setTimeout(typeIntro,80);

    }

}


typeIntro();



window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("introScreen")
        .style.opacity="0";


        setTimeout(()=>{

            document.getElementById("introScreen")
            .style.display="none";

        },1000);


    },3500);

});





// ===============================
// FLOATING HEARTS ❤️
// ===============================


const heartsContainer =
document.getElementById("hearts");


function createHeart(){


let heart=document.createElement("span");


heart.innerHTML="❤️";


heart.className="floating-heart";


heart.style.left =
Math.random()*100+"vw";


heart.style.animationDuration =
(4+Math.random()*5)+"s";


heartsContainer.appendChild(heart);



setTimeout(()=>{

heart.remove();

},9000);


}


setInterval(createHeart,400);





// ===============================
// PETALS 🌸
// ===============================


const petals =
document.getElementById("petals");


function createPetal(){


let petal=document.createElement("span");


petal.innerHTML="🌸";


petal.className="petal";


petal.style.left =
Math.random()*100+"vw";


petal.style.animationDuration =
(5+Math.random()*5)+"s";


petals.appendChild(petal);



setTimeout(()=>{

petal.remove();

},10000);


}


setInterval(createPetal,700);





// ===============================
// SPARKLES ✨
// ===============================


const sparkles =
document.getElementById("sparkles");



function sparkle(){


let star=document.createElement("span");


star.innerHTML="✨";


star.className="sparkle";


star.style.left =
Math.random()*100+"vw";


star.style.top =
Math.random()*100+"vh";


sparkles.appendChild(star);



setTimeout(()=>{

star.remove();

},3000);


}


setInterval(sparkle,500);





// ===============================
// MUSIC PLAYER 🎵
// ===============================


const music =
document.getElementById("bgMusic");


const musicButton =
document.getElementById("musicButton");



let playing=false;



// Put your song name here

music.src="song.mp3";



musicButton.addEventListener("click",()=>{


if(playing){

music.pause();

musicButton.innerHTML="🎵";

playing=false;


}

else{


music.play()
.catch(()=>{});


musicButton.innerHTML="⏸️";

playing=true;


}



});



// mobile autoplay after touch

document.body.addEventListener("click",()=>{

if(!playing){

music.play()
.catch(()=>{});

playing=true;

}


},{once:true});







// ===============================
// START JOURNEY BUTTON
// ===============================


const startButton =
document.getElementById("startJourney");



if(startButton){


startButton.addEventListener("click",()=>{


document.getElementById("chapter1")
.scrollIntoView({

behavior:"smooth"

});


});


}







// ===============================
// SCROLL ANIMATION
// ===============================


const sections =
document.querySelectorAll("section");



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let position =
section.getBoundingClientRect().top;



if(position < window.innerHeight-100){


section.classList.add("show");


}


});


});







// ===============================
// PHOTO HEART EFFECT ❤️
// ===============================


const photos =
document.querySelectorAll("img");



photos.forEach(photo=>{


photo.addEventListener("click",(e)=>{


let heart=document.createElement("div");


heart.innerHTML="💗";


heart.className="click-heart";


heart.style.left =
e.pageX+"px";


heart.style.top =
e.pageY+"px";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},1500);



});


});







// ===============================
// ENVELOPE OPEN 💌
// ===============================


const openLetter =
document.getElementById("openLetter");


const envelope =
document.getElementById("envelope");



if(openLetter){


openLetter.addEventListener("click",()=>{


envelope.classList.toggle("open");


});


}







// ===============================
// HEART GALLERY RANDOM FLOAT
// ===============================


const galleryImages =
document.querySelectorAll(".heart-gallery img");



galleryImages.forEach((img,index)=>{


img.style.animationDelay =
(index*0.15)+"s";


});







// ===============================
// LOVE COUNTER
// ===============================


// Change date according to your relationship

const startDate =
new Date("2026-01-01");



function loveDays(){


let today =
new Date();


let difference =
today-startDate;



let days =
Math.floor(
difference/(1000*60*60*24)
);



console.log(
"❤️ Together for "+days+" days ❤️"
);


}


loveDays();







// ===============================
// DISABLE IMAGE DRAG
// ===============================


document.querySelectorAll("img")
.forEach(img=>{


img.draggable=false;


});



console.log(
"❤️ Memory Book Loaded Successfully ❤️"
);
