import { categories } from "./categories.js";

import { pop } from "./data/pop.js";
import { hiphop } from "./data/hiphop.js";
import { rock } from "./data/rock.js";
import { noticias } from "./data/noticias.js";
import { romantico } from "./data/romantico.js";
import { clasicos } from "./data/clasicos.js";
import { variado } from "./data/variado.js";
import { salsa } from "./data/salsa.js";
import { latino } from "./data/latino.js";
import { reggae } from "./data/reggae.js";
import { rnb } from "./data/rnb.js";
import { cumbia } from "./data/cumbia.js";
import { chill } from "./data/chill.js";

const shows = [
  ...pop,
  ...hiphop,
  ...rock,
  ...noticias,
  ...romantico,
  ...clasicos,
  ...variado,
  ...salsa,
  ...latino,
  ...reggae,
  ...rnb,
  ...cumbia,
  ...chill,
];

/* ELEMENTOS DEL DOM */

const showsContainer = document.getElementById("shows");
const categoriesContainer = document.getElementById("radio-categories");
const relatedContainer = document.getElementById("related-shows");
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const status = document.getElementById("status");
const volume = document.getElementById("volume");
const playerTitle = document.getElementById("player-title");

/* HERO */

const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-img");
const heroTitle = document.querySelector(".hero h1");
const heroDesc = document.querySelector(".radio-desc");
const heroHost = document.getElementById("hero-host");
const heroCategory = document.getElementById("hero-category");
const heroListeners = document.getElementById("listeners");

/* ESTADO */

let playing = false;
let currentCategory = "Todas";
let currentShow = null;
let currentIndex = 0;

/* HERO */

function updateHero(show) {
  if (!show) return;

  if (heroImg) {
    heroImg.src = show.cover || show.img;
    heroImg.alt = show.title;
  }

  if (heroTitle) {
    heroTitle.textContent = show.title;
  }

  if (heroDesc) {
    heroDesc.textContent = show.desc || "";
  }

  if (heroHost) {
    heroHost.textContent = show.host || "";
  }

  if (heroCategory) {
    heroCategory.textContent = show.category || "";
  }

  if (heroListeners) {
    heroListeners.textContent = randomListeners(show.listeners) + " oyentes";
  }

  if (playerTitle) {
    playerTitle.textContent = show.title;
  }
}

/* OYENTES */

function randomListeners(base) {
  if (!base) {
    return "0";
  }

  const num = parseFloat(base);

  if (Number.isNaN(num)) {
    return base;
  }

  const variation = Math.random() * 0.4 - 0.2;

  return (num + variation).toFixed(1) + "K";
}

/* ANIMACIÓN HERO */

function animateHero() {
  if (!hero) return;

  hero.classList.add("change");

  setTimeout(() => {
    hero.classList.remove("change");
  }, 300);
}

/* ICONO PLAY / PAUSE */

function setPlayIcon() {
  if (!playBtn) return;

  if (playing) {
    playBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="26">
                <path
                    fill="white"
                    d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                />
            </svg>
        `;
  } else {
    playBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="26">
                <path
                    fill="white"
                    d="M8 5v14l11-7z"
                />
            </svg>
        `;
  }
}

/* RENDER EMISORAS */

function renderShows() {
  if (!showsContainer) return;

  showsContainer.innerHTML = "";

  const filteredShows =
    currentCategory === "Todas"
      ? shows
      : shows.filter((show) => show.category === currentCategory);

  filteredShows.forEach((show) => {
    const div = document.createElement("div");

    div.className = "show";

    div.innerHTML = `
            <img
                src="${show.img}"
                alt="${show.title}"
            >

            <div class="show-info">

                <strong>
                    ${show.title}
                </strong>

                <p>
                    ${show.host || ""}
                </p>

            </div>
        `;

    if (currentShow && currentShow.title === show.title) {
      div.classList.add("active");
    }

    div.addEventListener("click", () => {
      const index = shows.indexOf(show);

      playShow(show, index);
    });

    showsContainer.appendChild(div);
  });

  if (!currentShow && filteredShows.length > 0) {
    currentShow = filteredShows[0];

    currentIndex = shows.indexOf(currentShow);

    updateHero(currentShow);
  }

  renderRelated();
}

/* RENDER CATEGORÍAS */

function renderCategories() {
  if (!categoriesContainer) return;

  categoriesContainer.innerHTML = "";

  categories.forEach((category, index) => {
    const div = document.createElement("div");

    div.className = "category";

    if (category.title === currentCategory) {
      div.classList.add("active");
    }

    div.innerHTML = `
                <strong>
                    ${category.title}
                </strong>

                <p>
                    ${category.date}
                </p>
            `;

    div.addEventListener("click", () => {
      document.querySelectorAll(".category").forEach((element) => {
        element.classList.remove("active");
      });

      div.classList.add("active");

      currentCategory = category.title;

      currentShow = null;

      renderShows();
    });

    categoriesContainer.appendChild(div);
  });
}

/* REPRODUCIR EMISORA */

async function playShow(show, index) {
  if (!show || !show.src) {
    console.warn("La emisora no tiene URL:", show);

    return;
  }

  currentShow = show;

  currentIndex = index;

  try {
    audio.src = show.src;

    await audio.play();

    playing = true;

    status.textContent = "Reproduciendo";

    updateHero(show);

    animateHero();

    setPlayIcon();

    updateActiveShow();

    renderRelated();
  } catch (error) {
    console.error("Error al reproducir la emisora:", error);

    playing = false;

    status.textContent = "No se pudo reproducir";

    setPlayIcon();
  }
}

/* ACTUALIZAR EMISORA ACTIVA */

function updateActiveShow() {
  document.querySelectorAll(".show").forEach((element) => {
    element.classList.remove("active");
  });

  document.querySelectorAll(".show").forEach((element) => {
    const titleElement = element.querySelector("strong");

    if (
      titleElement &&
      currentShow &&
      titleElement.textContent.trim() === currentShow.title
    ) {
      element.classList.add("active");
    }
  });
}

/* EMISORAS SIMILARES */

function renderRelated() {
  if (!relatedContainer || !currentShow) {
    return;
  }

  relatedContainer.innerHTML = "";

  const related = shows.filter(
    (show) =>
      show.category === currentShow.category &&
      show.title !== currentShow.title,
  );

  if (related.length === 0) {
    relatedContainer.innerHTML = `
            <span style="color:#666">
                No hay radios relacionadas
            </span>
        `;

    return;
  }

  related.forEach((show) => {
    const div = document.createElement("div");

    div.className = "related-card";

    div.innerHTML = `
                <img
                    src="${show.cover || show.img}"
                    alt="${show.title}"
                >

                <strong>
                    ${show.title}
                </strong>

                <span>
                    ${show.host || ""}
                </span>
            `;

    div.addEventListener("click", () => {
      const index = shows.indexOf(show);

      playShow(show, index);
    });

    relatedContainer.appendChild(div);
  });
}

/* PLAYER */

if (playBtn) {
  playBtn.addEventListener("click", async () => {
    if (!audio.src || !currentShow) {
      return;
    }

    try {
      if (!playing) {
        await audio.play();

        playing = true;

        status.textContent = "Reproduciendo";
      } else {
        audio.pause();

        playing = false;

        status.textContent = "Pausado";
      }

      setPlayIcon();
    } catch (error) {
      console.error("Error en el reproductor:", error);
    }
  });
}

/* EVENTOS DEL AUDIO */

audio.addEventListener("play", () => {
  playing = true;

  status.textContent = "Reproduciendo";

  setPlayIcon();
});

audio.addEventListener("pause", () => {
  playing = false;

  status.textContent = "Pausado";

  setPlayIcon();
});

audio.addEventListener("error", () => {
  playing = false;

  status.textContent = "Error de reproducción";

  setPlayIcon();
});

/* VOLUMEN */

if (volume) {
  audio.volume = Number(volume.value);

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value);
  });
}

/* ANTERIOR / SIGUIENTE */

async function playShowByIndex(index) {
  if (shows.length === 0) {
    return;
  }

  if (index < 0) {
    index = shows.length - 1;
  }

  if (index >= shows.length) {
    index = 0;
  }

  const show = shows[index];

  await playShow(show, index);
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

/* MENÚ MOBILE */

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("radio-sidebar");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("radio-overlay");

function openSidebar() {
  if (!sidebar || !overlay) {
    return;
  }

  sidebar.classList.add("open");

  overlay.classList.add("active");

  document.body.classList.add("no-scroll");
}

function closeSidebar() {
  if (!sidebar || !overlay) {
    return;
  }

  sidebar.classList.remove("open");

  overlay.classList.remove("active");

  document.body.classList.remove("no-scroll");
}

if (menuBtn) {
  menuBtn.addEventListener("click", openSidebar);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeSidebar);
}

if (overlay) {
  overlay.addEventListener("click", closeSidebar);
}

/* CERRAR SIDEBAR AL HACER CLICK AFUERA */

document.addEventListener("click", (event) => {
  if (!sidebar) return;

  const clickedInsideSidebar = sidebar.contains(event.target);

  const clickedMenuButton = menuBtn && menuBtn.contains(event.target);

  if (
    !clickedInsideSidebar &&
    !clickedMenuButton &&
    sidebar.classList.contains("open")
  ) {
    closeSidebar();
  }
});

/* INICIALIZACIÓN */

renderCategories();
renderShows();
setPlayIcon();
