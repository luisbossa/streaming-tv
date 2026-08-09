import { radioState } from "./state.js";
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

import { initCategories } from "./categories.js";
import { updateHero } from "./hero.js";
import { initPlayer, playRadio } from "./player.js";
import { renderRelated } from "./related.js";
import { initMobile } from "./mobile.js";

/* =========================================================
   TODAS LAS EMISORAS
========================================================= */

export const shows = [
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

/* =========================================================
   ELEMENTOS
========================================================= */

const showsContainer = document.getElementById("shows");

/* =========================================================
   OBTENER EMISORAS FILTRADAS
========================================================= */

export function getFilteredShows() {
  if (radioState.currentCategory === "Todas") {
    return shows;
  }

  return shows.filter((show) => show.category === radioState.currentCategory);
}

/* =========================================================
   RENDER EMISORAS
========================================================= */

export function renderShows() {
  if (!showsContainer) {
    return;
  }

  showsContainer.innerHTML = "";

  const filteredShows = getFilteredShows();

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

    /*
     * Marcar emisora activa
     */

    if (radioState.currentShow && radioState.currentShow.title === show.title) {
      div.classList.add("active");
    }

    /*
     * Seleccionar emisora
     */

    div.addEventListener("click", () => {
      selectRadio(show);
    });

    showsContainer.appendChild(div);
  });

  /*
   * Si no hay emisora seleccionada,
   * seleccionar la primera
   */

  if (!radioState.currentShow && filteredShows.length > 0) {
    radioState.currentShow = filteredShows[0];

    radioState.currentIndex = shows.indexOf(radioState.currentShow);

    updateHero(radioState.currentShow);

    renderRelated(radioState.currentShow, shows);
  }
}

/* =========================================================
   SELECCIONAR EMISORA
========================================================= */

export function selectRadio(show) {
  if (!show) {
    return;
  }

  const index = shows.indexOf(show);

  radioState.currentShow = show;
  radioState.currentIndex = index;

  updateHero(show);

  updateActiveRadio();

  playRadio(show);

  renderRelated(show, shows);
}

/* =========================================================
   ACTUALIZAR EMISORA ACTIVA
========================================================= */

function updateActiveRadio() {
  document.querySelectorAll(".show").forEach((element) => {
    element.classList.remove("active");
  });

  document.querySelectorAll(".show").forEach((element) => {
    const title = element.querySelector("strong");

    if (
      title &&
      radioState.currentShow &&
      title.textContent.trim() === radioState.currentShow.title
    ) {
      element.classList.add("active");
    }
  });
}

/* =========================================================
   CAMBIAR CATEGORÍA
========================================================= */

function changeCategory(category) {
  radioState.currentCategory = category;

  radioState.currentShow = null;

  renderShows();
}

/* =========================================================
   SIGUIENTE EMISORA
========================================================= */

export function nextRadio() {
  if (!shows.length) {
    return;
  }

  let index = radioState.currentIndex + 1;

  if (index >= shows.length) {
    index = 0;
  }

  selectRadio(shows[index]);
}

/* =========================================================
   EMISORA ANTERIOR
========================================================= */

export function previousRadio() {
  if (!shows.length) {
    return;
  }

  let index = radioState.currentIndex - 1;

  if (index < 0) {
    index = shows.length - 1;
  }

  selectRadio(shows[index]);
}

window.addEventListener("radio:select", (event) => {
  selectRadio(event.detail);
});

/* =========================================================
   INICIALIZACIÓN
========================================================= */

initCategories(changeCategory);
initPlayer(nextRadio, previousRadio);
initMobile();
renderShows();
