/* ===================== DATA ===================== */

const shows = [
  {
    title: "TicoSound Radio",
    host: "Costa Rica Live",
    desc: "Somos la estacion de barrio más escuchada",
    img: "/assets/images/radio-imgs/ticoSound.jpg",
    cover: "/assets/images/radio-imgs/ticoSound-cover.jfif",
    src: "https://live.streamingradiosmr.com/8152/stream",
  },
  {
    title: "BBC Radio 2",
    host: "UK Hits",
    desc: "Clásicos y éxitos modernos para todo el día.",
    img: "https://picsum.photos/50?2",
    cover: "https://picsum.photos/1200/600?2",
    src: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two",
  },
  {
    title: "Los 40",
    host: "España",
    desc: "Los éxitos más escuchados del momento.",
    img: "https://picsum.photos/50?3",
    cover: "https://picsum.photos/1200/600?3",
    src: "https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40.mp3",
  },
  {
    title: "Rock FM",
    host: "Rock Clásico",
    desc: "Lo mejor del rock clásico internacional.",
    img: "https://picsum.photos/50?4",
    cover: "https://picsum.photos/1200/600?4",
    src: "https://playerservices.streamtheworld.com/api/livestream-redirect/ROCK_FM.mp3",
  },
  {
    title: "Cadena SER",
    host: "Noticias",
    desc: "Información y actualidad en tiempo real.",
    img: "https://picsum.photos/50?5",
    cover: "https://picsum.photos/1200/600?5",
    src: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3",
  },
  {
    title: "NRJ France",
    host: "Top Hits",
    desc: "Música internacional sin parar.",
    img: "https://picsum.photos/50?6",
    cover: "https://picsum.photos/1200/600?6",
    src: "https://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3",
  },
  {
    title: "Kiss FM",
    host: "Pop",
    desc: "Pop y entretenimiento todo el día.",
    img: "https://picsum.photos/50?7",
    cover: "https://picsum.photos/1200/600?7",
    src: "https://kissfm.kissfmradio.cires21.com/kissfm.mp3",
  },
  {
    title: "Radio Swiss Pop",
    host: "Chill",
    desc: "Música relajante y sin interrupciones.",
    img: "https://picsum.photos/50?8",
    cover: "https://picsum.photos/1200/600?8",
    src: "https://stream.srg-ssr.ch/m/rsp/mp3_128",
  },
  {
    title: "Classic FM",
    host: "Clásica",
    desc: "Las mejores piezas de música clásica.",
    img: "https://picsum.photos/50?9",
    cover: "https://picsum.photos/1200/600?9",
    src: "https://media-ice.musicradio.com/ClassicFMMP3",
  },
  {
    title: "Radio Paradise",
    host: "Indie",
    desc: "Indie, rock y electrónica seleccionada.",
    img: "https://picsum.photos/50?10",
    cover: "https://picsum.photos/1200/600?10",
    src: "https://stream.radioparadise.com/mp3-128",
  },
  {
    title: "Jazz24",
    host: "Jazz",
    desc: "Jazz 24/7 desde Seattle.",
    img: "https://picsum.photos/50?11",
    cover: "https://picsum.photos/1200/600?11",
    src: "https://live.wostreaming.net/direct/ppm-jazz24mp3-ibc1",
  },
  {
    title: "Smooth Lounge",
    host: "Lounge",
    desc: "Sonidos lounge y relajantes.",
    img: "https://picsum.photos/50?12",
    cover: "https://picsum.photos/1200/600?12",
    src: "https://media-ice.musicradio.com/SmoothLoungeMP3",
  },
  {
    title: "Dance UK",
    host: "EDM",
    desc: "Lo mejor del EDM y electrónica.",
    img: "https://picsum.photos/50?13",
    cover: "https://picsum.photos/1200/600?13",
    src: "https://uk2.internet-radio.com/proxy/danceuk?mp=/stream",
  },
  {
    title: "Reggae Roots",
    host: "Reggae",
    desc: "Vibras reggae todo el día.",
    img: "https://picsum.photos/50?14",
    cover: "https://picsum.photos/1200/600?14",
    src: "https://streamingv2.shoutcast.com/reggae-roots",
  },
  {
    title: "Deep House",
    host: "House",
    desc: "Deep house para concentrarte o relajarte.",
    img: "https://picsum.photos/50?15",
    cover: "https://picsum.photos/1200/600?15",
    src: "https://streamingv2.shoutcast.com/deep-house",
  },
];

const episodes = [
  { title: "Ride On The B Side", date: "27 marzo 2026" },
  { title: "Música y Filántropos", date: "20 marzo 2026" },
  { title: "Música de Película", date: "13 marzo 2026" },
];

/* ===================== ELEMENTS ===================== */

const showsContainer = document.getElementById("shows");
const episodesContainer = document.getElementById("episodes");

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const status = document.getElementById("status");
const volume = document.getElementById("volume");

const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-img");
const heroTitle = document.querySelector(".hero h1");
const heroDesc = document.querySelector(".hero .desc");

/* ===================== STATE ===================== */

let playing = false;

/* ===================== HERO ANIMATION ===================== */

function animateHero() {
  hero.classList.add("change");
  setTimeout(() => hero.classList.remove("change"), 300);
}

/* ===================== RENDER SHOWS ===================== */

shows.forEach((show) => {
  const div = document.createElement("div");
  div.className = "show";

  div.innerHTML = `
    <img src="${show.img}">
    <div class="show-info">
      <strong>${show.title}</strong>
      <p>${show.host}</p>
    </div>
  `;

  div.addEventListener("click", () => {
    document
      .querySelectorAll(".show")
      .forEach((el) => el.classList.remove("active"));
    div.classList.add("active");

    audio.src = show.src;
    audio.play();

    status.textContent = "Reproduciendo";
    playing = true;

    // HERO UPDATE 🔥
    animateHero();
    heroImg.src = show.cover;
    heroTitle.textContent = show.title;
    heroDesc.textContent = show.desc;

    // botón pause
    playBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="26">
        <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </svg>
    `;
  });

  showsContainer.appendChild(div);
});

/* ===================== RENDER EPISODES ===================== */

episodes.forEach((ep) => {
  const div = document.createElement("div");
  div.className = "episode";
  div.innerHTML = `
    <strong>${ep.title}</strong>
    <p>${ep.date}</p>
  `;
  episodesContainer.appendChild(div);
});

/* ===================== PLAYER ===================== */

playBtn.addEventListener("click", () => {
  if (!audio.src) return;

  if (!playing) {
    audio.play();
    status.textContent = "Reproduciendo";

    playBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="26">
        <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </svg>
    `;
  } else {
    audio.pause();
    status.textContent = "Pausado";

    playBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="26">
        <path fill="white" d="M8 5v14l11-7z"/>
      </svg>
    `;
  }

  playing = !playing;
});

/* ===================== VOLUME ===================== */

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

/* ===================== MOBILE MENU ===================== */

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
