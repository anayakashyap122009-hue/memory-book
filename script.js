// ===========================
// MUSIC
// ===========================

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

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
let isPlaying = true;

if (music) {
  music.src = songs[0];
  music.volume = 0.6;
}

if (musicButton) {
  musicButton.addEventListener("click", () => {
    if (!music) return;

    if (isPlaying) {
      music.pause();
      musicButton.textContent = "🔇";
      isPlaying = false;
    } else {
      music.play().catch(() => {});
      musicButton.textContent = "🎵";
      isPlaying = true;
    }
  });
}

// ===========================
// INTRO TYPEWRITER
// ===========================

const introScreen = document.getElementById("introScreen");
const introText = document.getElementById("introText");

const message =
  "A little surprise for the most beautiful girl in my life... ❤️";

let charIndex = 0;

function typeWriter() {
  if (!introText) return;

  if (charIndex < message.length) {
    introText.textContent += message.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 60);
  }
}

typeWriter();

setTimeout(() => {
  if (introScreen) {
    introScreen.classList.add("hide");
  }

  if (music) {
    music.play().catch(() => {});
  }
}, 5500);

// ===========================
// START JOURNEY BUTTON
// ===========================

const startBtn = document.getElementById("startJourney");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    const chapter1 = document.getElementById("chapter1");

    if (chapter1) {
      chapter1.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

// ===========================
// SONG CHANGE ON SCROLL
// ===========================

const sectionIds = [
  "cover",
  "chapter1",
  "chapter2",
  "chapter3",
  "chapter4",
  "chapter5",
  "chapter6",
  "final"
];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const index = sectionIds.indexOf(entry.target.id);

      if (index !== -1 && index !== currentSong) {
        currentSong = index;

        if (music) {
          music.src = songs[index];
          music.play().catch(() => {});
        }
      }
    });
  },
  {
    threshold: 0.55
  }
);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);

  if (section) {
    observer.observe(section);
  }
});

// ===========================
// ENVELOPE
// ===========================

const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");

if (openLetter && envelope) {
  openLetter.addEventListener("click", () => {
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
      openLetter.textContent = "❤️ I Love You Forever ❤️";
    } else {
      openLetter.textContent = "💌 Open My Letter";
    }
  });
}
