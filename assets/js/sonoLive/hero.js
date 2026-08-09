/* =========================================================
   HERO
========================================================= */

const hero = document.querySelector(".hero");

const heroImg = document.querySelector(".hero-img");

const heroTitle = document.querySelector(".hero h1");

const heroDesc = document.querySelector(".radio-desc");

const heroHost = document.getElementById("hero-host");

const heroCategory = document.getElementById("hero-category");

const heroListeners = document.getElementById("listeners");

const playerTitle = document.getElementById("player-title");

/* =========================================================
   ACTUALIZAR HERO
========================================================= */

export function updateHero(show) {
  if (!show) {
    return;
  }

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

  animateHero();
}

/* =========================================================
   OYENTES
========================================================= */

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

/* =========================================================
   ANIMACIÓN
========================================================= */

function animateHero() {
  if (!hero) {
    return;
  }

  hero.classList.add("change");

  setTimeout(() => {
    hero.classList.remove("change");
  }, 300);
}
