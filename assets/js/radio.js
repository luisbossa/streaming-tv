const shows = [
  {
    title: "100hitz.com",
    host: "Música Hip-hop",
    category: "Hip-hop",
    listeners: "3.3K",
    desc: "100hitz.com es una red de radio en línea con estaciones de radio por Internet gratuitas.",
    img: "/assets/images/radio-imgs/100hitz.webp",
    cover: "/assets/images/radio-imgs/100hitz-cover.png",
    src: "https://pureplay.cdnstream1.com/6042_128.mp3",
  },
  {
    title: "181.fm",
    host: "Clásicos variados",
    category: "Clasicos",
    listeners: "3.3K",
    desc: "Stream the best online radio on 181.fm. Enjoy Rock, Pop, Country, and more music genres with seamless streaming and top music stations anytime.",
    img: "/assets/images/radio-imgs/181fm.jfif",
    cover: "/assets/images/radio-imgs/181fm-cover.png",
    src: "https://listen.181fm.com/181-lite90s_128k.mp3?aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1723813260&aw_0_req.gdpr=false&listenerId=59748788a34b970b0f3f58843dff8c5f",
  },
  {
    title: "Bates FM",
    host: "90s Mix en vivo",
    category: "Clasicos",
    listeners: "4.0K",
    desc: "Bates FM brings the best in internet advertising, connecting a world wide audience with small, medium and large businesses.",
    img: "/assets/images/radio-imgs/batesFM.png",
    cover: "/assets/images/radio-imgs/batesFM-cover.png",
    src: "https://bigrradio.cdnstream1.com/5132_128",
  },
  {
    title: "Bésame 89.9 FM",
    host: "Música Romantica",
    category: "Romantico",
    listeners: "4.1K",
    desc: "Emisora costarricense de música romántica. Transmite tanto música en inglés como en español, contando que el amor y la pasión estén en su esencia.",
    img: "/assets/images/radio-imgs/besame.png",
    cover: "/assets/images/radio-imgs/besame-cover.jpg",
    src: "https://mdstrm.com/audio/67377c6b827a7efae2faf358/live.m3u8?property=emisoras-es",
  },
  {
    title: "Caliente 90.7 FM",
    host: "Música latina",
    category: "Lanino",
    listeners: "3.9K",
    desc: "Emisora con un formato musical enfocado en la música latina, con destaque para los sonidos tropicales, bachata, merengue, cumbia, salsa, baladas y música regional mexicana.",
    img: "/assets/images/radio-imgs/caliente.jpg",
    cover: "/assets/images/radio-imgs/caliente-cover.png",
    src: "https://mmradio-lb.mmlabs.mx/calientecr",
  },
  {
    title: "Classic Rock Station",
    host: "Música Rock clásica",
    category: "Rock",
    listeners: "2.9K",
    desc: "All The Rock Classics songs!",
    img: "/assets/images/radio-imgs/clasicRock.png",
    cover: "/assets/images/radio-imgs/clasicRock-cover.png",
    src: "https://n02.rcs.revma.com/fk3507vbv4uvv/2_16iifzo43qpn202/playlist.m3u8",
  },
  {
    title: "Crossover Estereo",
    host: "Música variada",
    category: "Variado",
    listeners: "2.6K",
    desc: "Con una programación que abarca una amplia gama de géneros musicales.",
    img: "/assets/images/radio-imgs/crossover.png",
    cover: "/assets/images/radio-imgs/crossover-cover.png",
    src: "https://stream-159.zeno.fm/76skg1fndkeuv",
  },
  {
    title: "eltunel.co",
    host: "Música Rock clásica",
    category: "Rock",
    listeners: "2.2K",
    desc: "Sistema de radios online de Colombia. Nuestras señales ofrecen radio streaming 24/7.",
    img: "/assets/images/radio-imgs/elTunel.png",
    cover: "/assets/images/radio-imgs/elTunel-cover.webp",
    src: "https://play10.tikast.com/proxy/eltunel?mp=/stream",
  },
  {
    title: "Espiritu Rock Radio",
    host: "Música Rock clásica",
    category: "Rock",
    listeners: "2.4K",
    desc: "Estación que opera desde la comunidad colombiana de Pereira a través de su espacio virtual.",
    img: "/assets/images/radio-imgs/espiritu-rock.webp",
    cover: "/assets/images/radio-imgs/espiritu-rock-cover.png",
    src: "https://centova92.instainternet.com/proxy/santiago/stream",
  },
  {
    title: "Flow 103",
    host: "Música Hip-hop",
    category: "Hip-hop",
    listeners: "2.7K",
    desc: "Free internet radio playing the hottest hip hop, live 24/7.",
    img: "/assets/images/radio-imgs/flow103.png",
    cover: "/assets/images/radio-imgs/flow103-cover.jpg",
    src: "https://ais-sa3.cdnstream1.com/1668_128",
  },
  {
    title: "Hip Hop Request",
    host: "Música Hip-hop",
    category: "Hip-hop",
    listeners: "3.5K",
    desc: "Online radio station that invites the audience to participate in music selection.",
    img: "/assets/images/radio-imgs/request.webp",
    cover: "/assets/images/radio-imgs/request-cover.png",
    src: "https://radio.978host.com/sslstream",
  },
  {
    title: "Hits Radio",
    host: "Música de los 90's",
    category: "Clasicos",
    listeners: "4.1K",
    desc: "Free Internet Radio with Unlimited Skips!! Start listening to free personalized music stations with no registration required.",
    img: "/assets/images/radio-imgs/hitsRadio.png",
    cover: "/assets/images/radio-imgs/hitsRadio-cover.png",
    src: "https://26433.live.streamtheworld.com/977_90_SC",
  },
  {
    title: "JOE FM",
    host: "Música clásica",
    category: "Clasicos",
    listeners: "1.8K",
    desc: "Escucha tu Radio Joe 80s Belgium FM las 24 horas del día.",
    img: "/assets/images/radio-imgs/joe.png",
    cover: "/assets/images/radio-imgs/joe-cover.png",
    src: "https://streams.radio.dpgmedia.cloud/redirect/joe_nl/mp3?source=mytuner",
  },
  {
    title: "Radio Columbia",
    host: "Noticias y deportes",
    category: "Noticias",
    listeners: "5.6K",
    desc: "Una de las principales emisoras de radio de Costa Rica para contenidos informativos.",
    img: "/assets/images/radio-imgs/columbia.png",
    cover: "/assets/images/radio-imgs/columbia-cover.jpg",
    src: "https://s2.radio.co/s83b86382e/listen",
  },
  {
    title: "Radio Dos 99.5",
    host: "Música pop",
    category: "Pop",
    listeners: "3.2K",
    desc: "Éxitos que fueron de uno y ahora son de 2.",
    img: "/assets/images/radio-imgs/radio2.png",
    cover: "/assets/images/radio-imgs/radio2-cover.jpg",
    src: "https://s5.radio.co/sd515b7b34/listen",
  },
  {
    title: "Radio Musical 97.5",
    host: "Música Romantica",
    category: "Romantico",
    listeners: "3.5K",
    desc: "Radio Musical es una emisora cercana a sus oyentes.",
    img: "/assets/images/radio-imgs/radio-musical.png",
    cover: "/assets/images/radio-imgs/radio-musical-cover.jpg",
    src: "https://live.turadio.stream:7005/stream",
  },
  {
    title: "Salsa y Más",
    host: "Música salsa",
    category: "Salsa",
    listeners: "3.1K",
    desc: "Con sabor Latino!",
    img: "/assets/images/radio-imgs/salsaMas.jpeg",
    cover: "/assets/images/radio-imgs/salsaMas-cover.png",
    src: "https://stream-166.zeno.fm/42w3pfn7pzzuv",
  },
  {
    title: "Teletica Radio 91.5 FM",
    host: "Noticias y deportes",
    category: "Noticias",
    listeners: "6.1K",
    desc: "Emisora dedicada a contenidos informativos y deportivos.",
    img: "/assets/images/radio-imgs/teletica.png",
    cover: "/assets/images/radio-imgs/teletica-cover.jpg",
    src: "https://g2qd375ol7an-hls-live.5centscdn.com/Radio/eae835e83c0494a376229f254f7d3392.sdp/playlist.m3u8",
  },
  {
    title: "totallyradio.com",
    host: "Música de los 90's",
    category: "Clasicos",
    listeners: "4.3K",
    desc: "Stream 15 free radio channels with the best music, news, and zero boring DJs. Australian independent radio with no ads.",
    img: "/assets/images/radio-imgs/totallyRadio.webp",
    cover: "/assets/images/radio-imgs/totallyRadio-cover.png",
    src: "https://26433.live.streamtheworld.com/977_90_SC",
  },
  {
    title: "Urban Hits",
    host: "Música Hip-hop y más",
    category: "Hip-hop",
    listeners: "3.9K",
    desc: "URBAN HITS - France.",
    img: "/assets/images/radio-imgs/urbanHits.png",
    cover: "/assets/images/radio-imgs/urbanHits-cover.jpg",
    src: "https://streaming.nrjaudio.fm/ouhse4apu6pb",
  },
  {
    title: "Urbano 106 FM",
    host: "Música Hip-hop",
    category: "Hip-hop",
    listeners: "4.8K",
    desc: "Emisora de corte musical urbano.",
    img: "/assets/images/radio-imgs/urbano.png",
    cover: "/assets/images/radio-imgs/urbano-cover.png",
    src: "https://usa18.fastcast4u.com/proxy/rmoohhrw?mp=/1",
  },
  {
    title: "W Radio",
    host: "Música variada",
    category: "Variado",
    listeners: "4.4K",
    desc: "Emite 24 horas al día.",
    img: "/assets/images/radio-imgs/wRadio.png",
    cover: "/assets/images/radio-imgs/wRadio-cover.jpg",
    src: "https://27573.live.streamtheworld.com/WRADIOAAC_SC",
  },
];

const categories = [
  { title: "Todas", date: "Todas las emisoras" },
  { title: "Pop", date: "Música comercial" },
  { title: "Hip-hop", date: "Música urbana" },
  { title: "Rock", date: "Clásico y moderno" },
  { title: "Noticias", date: "Noticias y más" },
  { title: "Romantico", date: "Canciones de amor" },
  { title: "Clasicos", date: "90's, 80's y más" },
  { title: "Variado", date: "Todo tipo de música" },
  { title: "Salsa", date: "Música salsa para bailar" },
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

const heroListeners = document.querySelector(".listeners");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

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

  if (heroListeners) {
    heroListeners.textContent = randomListeners(show.listeners) + " oyentes";
  }
}

function randomListeners(base) {
  const num = parseFloat(base);
  const variation = Math.random() * 0.4 - 0.2;
  return (num + variation).toFixed(1) + "K";
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

document.addEventListener("click", (e) => {
  if (!sidebar) return;

  const clickedInsideSidebar = sidebar.contains(e.target);
  const clickedMenuBtn = menuBtn && menuBtn.contains(e.target);

  if (!clickedInsideSidebar && !clickedMenuBtn) {
    sidebar.classList.remove("open");
  }
});

async function playShowByIndex(index) {
  if (index < 0) index = shows.length - 1;
  if (index >= shows.length) index = 0;

  const show = shows[index];

  currentShow = show;
  currentIndex = index;

  try {
    audio.src = show.src;
    await audio.play();

    status.textContent = "Reproduciendo";
    playing = true;

    updateHero(show);
    renderRelated();

    playBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="26">
        <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </svg>
    `;

    /* actualizar activo en sidebar */
    document.querySelectorAll(".show").forEach((el) => {
      el.classList.remove("active");
    });

    const showElements = document.querySelectorAll(".show");
    if (showElements[index]) {
      showElements[index].classList.add("active");
    }
  } catch (err) {
    console.error(err);
  }
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    playShowByIndex(currentIndex - 1);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    playShowByIndex(currentIndex + 1);
  });
}
