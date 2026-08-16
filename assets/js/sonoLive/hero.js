const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-img");
const heroTitle = document.querySelector(".hero h1");
const heroDesc = document.querySelector(".radio-desc");
const heroHost = document.getElementById("hero-host");
const heroCategory = document.getElementById("hero-category");
const heroListeners = document.getElementById("listeners");
const playerTitle = document.getElementById("player-title");

export function updateHero(show) {
  if (!show) {
    return;
  }

  if (heroImg) {
    const newImage = show.cover || show.img;
    const skeleton = document.querySelector(".hero-image-skeleton");

    // Mostrar skeleton
    if (skeleton) {
      skeleton.classList.remove("hidden");
    }

    // Ocultar imagen mientras carga
    heroImg.classList.remove("loaded");

    // Crear imagen temporal para precargar
    const imageLoader = new Image();

    imageLoader.onload = () => {
      // Cuando terminó de cargar, colocamos la imagen
      heroImg.src = newImage;
      heroImg.alt = show.title;

      // Mostrar imagen
      requestAnimationFrame(() => {
        heroImg.classList.add("loaded");

        // Ocultar skeleton
        if (skeleton) {
          skeleton.classList.add("hidden");
        }
      });
    };

    imageLoader.onerror = () => {
      console.error("No se pudo cargar la imagen:", newImage);

      // Ocultar skeleton aunque falle
      if (skeleton) {
        skeleton.classList.add("hidden");
      }

      // Mostrar la imagen igualmente para poder detectar el error
      heroImg.src = newImage;
      heroImg.alt = show.title;
    };

    imageLoader.src = newImage;
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

function animateHero() {
  if (!hero) {
    return;
  }

  hero.classList.add("change");

  setTimeout(() => {
    hero.classList.remove("change");
  }, 300);
}
