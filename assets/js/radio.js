/* ===================== DATA ===================== */

const shows = [
  {
    title: "TicoSound Radio",
    host: "Costa Rica Live",
    category: "Pop",
    desc: "Somos la estacion de barrio más escuchada",
    img: "/assets/images/radio-imgs/ticoSound.jpg",
    cover: "/assets/images/radio-imgs/ticoSound-cover.jfif",
    src: "https://live.streamingradiosmr.com/8152/stream",
  },
  {
    title: "BEST FM",
    host: "Costa Rica Live",
    category: "Pop",
    desc: "Clásicos y éxitos modernos para todo el día.",
    img: "/assets/images/radio-imgs/bestFM.png",
    cover: "/assets/images/radio-imgs/bestFM-cover.jfif",
    src: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two",
  },
  {
    title: "Los 40",
    host: "España",
    category: "Pop",
    desc: "Los éxitos más escuchados del momento.",
    img: "https://picsum.photos/50?3",
    cover: "https://picsum.photos/1200/600?3",
    src: "https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40.mp3",
  },
  {
    title: "Rock FM",
    host: "Rock Clásico",
    category: "Rock",
    desc: "Lo mejor del rock clásico internacional.",
    img: "https://picsum.photos/50?4",
    cover: "https://picsum.photos/1200/600?4",
    src: "https://playerservices.streamtheworld.com/api/livestream-redirect/ROCK_FM.mp3",
  },
  {
    title: "Cadena SER",
    host: "Noticias",
    category: "Noticias",
    desc: "Información y actualidad en tiempo real.",
    img: "https://picsum.photos/50?5",
    cover: "https://picsum.photos/1200/600?5",
    src: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3",
  },
];

const categories = [
  { title: "Todas", date: "Ver todo" },
  { title: "Pop", date: "Música comercial" },
  { title: "Rock", date: "Clásico y moderno" },
  { title: "Noticias", date: "Actualidad" },
];

/* ===================== ELEMENTS ===================== */

const showsContainer = document.getElementById("shows");
const categoriesContainer = document.getElementById("radio-categories");

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const status = document.getElementById("status");
const volume = document.getElementById("volume");

const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-img");
const heroTitle = document.querySelector(".hero h1");
const heroDesc = document.querySelector(".radio-desc");

const heroHost = document.getElementById("hero-host");
const heroStatus = document.getElementById("hero-status");

const relatedContainer = document.getElementById("related-shows");

/* ===================== STATE ===================== */

let playing = false;
let currentCategory = "Todas";
let currentShow = null;
let currentIndex = 0;

/* ===================== HERO ===================== */

function updateHero(show) {
  if (!show) return;

  heroImg.src = show.cover;
  heroTitle.textContent = show.title;
  heroDesc.textContent = show.desc;

  if (heroHost) heroHost.textContent = show.host;
  if (heroStatus) heroStatus.textContent = "En vivo";
}

function animateHero() {
  if (!hero) return;
  hero.classList.add("change");
  setTimeout(() => hero.classList.remove("change"), 300);
}

/* ===================== RENDER SHOWS ===================== */

function renderShows() {
  if (!showsContainer) return;

  showsContainer.innerHTML = "";

  const filtered =
    currentCategory === "Todas"
      ? shows
      : shows.filter((s) => s.category === currentCategory);

  filtered.forEach((show, index) => {
    const div = document.createElement("div");
    div.className = "show";

    div.innerHTML = `
      <img src="${show.img}">
      <div class="show-info">
        <strong>${show.title}</strong>
        <p>${show.host}</p>
      </div>
    `;

    div.addEventListener("click", async () => {
      document
        .querySelectorAll(".show")
        .forEach((el) => el.classList.remove("active"));

      div.classList.add("active");

      currentShow = show;
      currentIndex = shows.indexOf(show); // 🔥 IMPORTANTE

      try {
        audio.src = show.src;
        await audio.play();

        status.textContent = "Reproduciendo";
        playing = true;

        animateHero();
        updateHero(show);

        playBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="26">
        <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </svg>
    `;

        renderRelated(); // 🔥 SOLO ESTO AGREGAS
      } catch (err) {
        console.error("Error:", err);
      }
    });

    showsContainer.appendChild(div);

    /* 🔥 setear primer elemento en hero */
    if (!currentShow && index === 0) {
      currentShow = show;
      updateHero(show);
    }
  });
  if (currentShow) renderRelated();
}

/* ===================== RENDER CATEGORIES ===================== */

function renderCategories() {
  if (!categoriesContainer) return;

  categoriesContainer.innerHTML = "";

  categories.forEach((cat, index) => {
    const div = document.createElement("div");
    div.className = "category";

    if (index === 0) div.classList.add("active");

    div.innerHTML = `
      <strong>${cat.title}</strong>
      <p>${cat.date}</p>
    `;

    div.addEventListener("click", () => {
      document
        .querySelectorAll(".category")
        .forEach((el) => el.classList.remove("active"));

      div.classList.add("active");

      currentCategory = cat.title;
      currentShow = null;

      renderShows();
    });

    categoriesContainer.appendChild(div);
  });
}

/* ===================== INIT ===================== */

renderCategories();
renderShows();

function renderShows() {
  showsContainer.innerHTML = "";

  shows.forEach((show, index) => {
    const div = document.createElement("div");
    div.className = "show";

    div.innerHTML = `
      <img src="${show.img}">
      <div class="show-info">
        <strong>${show.title}</strong>
        <p>${show.host}</p>
      </div>
    `;

    div.addEventListener("click", () => loadShow(index));

    showsContainer.appendChild(div);
  });
}

function renderRelated() {
  if (!relatedContainer || !currentShow) return;

  relatedContainer.innerHTML = "";

  const related = shows.filter(
    (s) => s.category === currentShow.category && s.title !== currentShow.title,
  );

  if (related.length === 0) {
    relatedContainer.innerHTML =
      "<span style='color:#666'>No hay radios relacionadas</span>";
    return;
  }

  related.forEach((show) => {
    const div = document.createElement("div");
    div.className = "related-card";

    div.innerHTML = `
      <img src="${show.cover}">
      <strong>${show.title}</strong>
      <span>${show.host}</span>
    `;

    div.addEventListener("click", async () => {
      currentShow = show;
      currentIndex = shows.indexOf(show);

      audio.src = show.src;
      await audio.play();

      status.textContent = "Reproduciendo";
      playing = true;

      updateHero(show);
      renderRelated();
    });

    relatedContainer.appendChild(div);
  });
}

/* ===================== PLAYER ===================== */

if (playBtn) {
  playBtn.addEventListener("click", () => {
    if (!audio.src) return;

    if (!playing) {
      audio.play();
      status.textContent = "Reproduciendo";
    } else {
      audio.pause();
      status.textContent = "Pausado";
    }

    playBtn.innerHTML = playing
      ? `<svg viewBox="0 0 24 24" width="26">
           <path fill="white" d="M8 5v14l11-7z"/>
         </svg>`
      : `<svg viewBox="0 0 24 24" width="26">
           <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
         </svg>`;

    playing = !playing;
  });
}

/* ===================== VOLUME ===================== */

if (volume) {
  volume.addEventListener("input", () => {
    audio.volume = volume.value;
  });
}

/* ===================== MOBILE MENU ===================== */

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("radioSidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}
