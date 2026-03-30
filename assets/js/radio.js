const shows = [
  {
    title: "Radio Dos 99.5",
    host: "Música pop",
    category: "Pop",
    desc: "Éxitos que fueron de uno y ahora son de 2.",
    img: "/assets/images/radio-imgs/radio2.png",
    cover: "/assets/images/radio-imgs/radio2-cover.jpg",
    src: "https://s5.radio.co/sd515b7b34/listen",
  },
  {
    title: "Urbano 106 FM",
    host: "Música Hip-hop",
    category: "Hip-hop",
    desc: "Emisora de corte musical urbano. Enfocada en programas dedicados a diferentes géneros musicales como el Reggae Clásico, Roots, Old School y Dance Hall, además de Hip Hop.",
    img: "/assets/images/radio-imgs/urbano.png",
    cover: "/assets/images/radio-imgs/urbano-cover.png",
    src: "https://usa18.fastcast4u.com/proxy/rmoohhrw?mp=/1",
  },
  {
    title: "Teletica Radio 91.5 FM",
    host: "Noticias y deportes",
    category: "Noticias",
    desc: "Es una emisora dedicada a la producción y transmisión de contenidos informativos y deportivos.",
    img: "/assets/images/radio-imgs/teletica.png",
    cover: "/assets/images/radio-imgs/teletica-cover.jpg",
    src: "https://g2qd375ol7an-hls-live.5centscdn.com/Radio/eae835e83c0494a376229f254f7d3392.sdp/playlist.m3u8",
  },
  {
    title: "Radio Columbia",
    host: "Noticias y deportes",
    category: "Noticias",
    desc: "Es una de las principales emisoras de radio de Costa Rica para contenidos informativos y deportivos.",
    img: "/assets/images/radio-imgs/columbia.png",
    cover: "/assets/images/radio-imgs/columbia-cover.jpg",
    src: "https://s2.radio.co/s83b86382e/listen",
  },
  {
    title: "Caliente 90.7 FM",
    host: "Música latina",
    category: "Lanino",
    desc: "Emisora con un formato musical enfocado en la música latina, con destaque para los sonidos tropicales, bachata, merengue, cumbia, salsa, baladas y música regional mexicana.",
    img: "/assets/images/radio-imgs/caliente.jpg",
    cover: "/assets/images/radio-imgs/caliente-cover.png",
    src: "https://mmradio-lb.mmlabs.mx/calientecr",
  },
  {
    title: "Radio Musical 97.5",
    host: "Música Romantica",
    category: "Romantico",
    desc: "Radio Musical es una emisora cercana a sus oyentes, transmitiendo una programación que se encuentra en constante actualización.",
    img: "/assets/images/radio-imgs/radio-musical.png",
    cover: "/assets/images/radio-imgs/radio-musical-cover.jpg",
    src: "https://live.turadio.stream:7005/stream",
  },
  {
    title: "Bésame Costa Rica 89.9 FM",
    host: "Música Romantica",
    category: "Romantico",
    desc: "Emisora costarricense de música romántica. Transmite tanto música en inglés como en español, contando que el amor y la pasión estén en su esencia.",
    img: "/assets/images/radio-imgs/besame.png",
    cover: "/assets/images/radio-imgs/besame-cover.jpg",
    src: "https://mdstrm.com/audio/67377c6b827a7efae2faf358/live.m3u8?property=emisoras-es",
  },
  {
    title: "Classic Rock Station",
    host: "Música Rock clásica",
    category: "Rock",
    desc: "All The Rock Classics songs!",
    img: "/assets/images/radio-imgs/clasicRock.png",
    cover: "/assets/images/radio-imgs/clasicRock-cover.png",
    src: "https://n02.rcs.revma.com/fk3507vbv4uvv/2_16iifzo43qpn202/playlist.m3u8",
  },
];

const categories = [
  { title: "Todas", date: "Ver todo" },
  { title: "Pop", date: "Música comercial" },
  { title: "Hip-hop", date: "Música urbana" },
  { title: "Rock", date: "Clásico y moderno" },
  { title: "Noticias", date: "Noticias y más" },
  { title: "Romantico", date: "Canciones de amor" },
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
      currentIndex = shows.indexOf(show);

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

        renderRelated();
      } catch (err) {
        console.error("Error:", err);
      }
    });

    showsContainer.appendChild(div);

    /* setear primer elemento en hero */
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
renderRelated();

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
const sidebar = document.getElementById("radio-sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

const closeBtn = document.getElementById("close-btn");

if (closeBtn && sidebar) {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}
