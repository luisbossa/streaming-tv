const video = document.getElementById("videoPlayer");
let hls = null;

const overlay = document.getElementById("fueraDeServicio");
const mensajeError = document.getElementById("mensajeError");

function ocultarError() {
  overlay.style.display = "none";
  video.style.opacity = "1";
}

function mostrarError(
  mensaje = "Actualmente no hay señal disponible para este canal."
) {
  overlay.style.display = "flex";
  video.style.opacity = "0";
  mensajeError.textContent = mensaje;
}

function habilitarDeteccionErrores(hlsInstance) {
  if (!hlsInstance) return;

  hlsInstance.on(Hls.Events.ERROR, (event, data) => {
    if (data.fatal) {
      console.log("Error fatal del stream:", data);
      mostrarError();
    }
  });
}

video.onerror = () => {
  console.log("Error del video element");
  mostrarError();
};

function iniciarTimeoutVerificacion() {
  ocultarError();
  setTimeout(() => {
    if (video.readyState < 2) {
      console.log("El canal no está enviando señal");
      mostrarError();
    }
  }, 5000);
}

function verificarVideoActivo() {
  if (video.videoWidth === 0 && video.videoHeight === 0) {
    mostrarError("Este canal reproduce solo audio. No hay imagen disponible.");
  } else {
    ocultarError();
  }
}

video.addEventListener("loadedmetadata", verificarVideoActivo);
video.addEventListener("playing", verificarVideoActivo);

const totalCanalesElement = document.getElementById("totalChannels");
const canalesOnlineElement = document.getElementById("channelsOnline");

const playButton = document.getElementById("btnPlay");
const volumeButton = document.getElementById("btnVolume");
const volumeSlider = document.getElementById("volumeSlider");
const statusText = document.getElementById("statusText");

if (totalCanalesElement && canalesOnlineElement) {
  const totalCanales = canales.length;
  totalCanalesElement.textContent = totalCanales;
  canalesOnlineElement.textContent = totalCanales;
}

const lista = document.getElementById("channelsList");

canales.forEach((canal, index) => {
  const button = document.createElement("button");
  button.id = canal.id;
  button.className = "btn-channel inactive-btn";

  button.innerHTML = `
    <div class="button-container inactive-circle">
      ${String(index + 1).padStart(2, "0")}
    </div>
    <div class="channel-image-container">
      <div class="img-div">
        <img src="${canal.imagen}" alt="${canal.nombre}" class="channel-image">
      </div>
      <div class="status-dot"></div>
    </div>
    <div class="channel-info">
      <h3 class="channel-name">${canal.nombre}</h3>
      <div class="channel-description">${canal.descripcion}</div>
      <div class="quality-div">
        <div class="channel-quality">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
               viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
               class="wifi-icon" aria-hidden="true">
            <path d="M12 20h.01"></path>
            <path d="M2 8.82a15 15 0 0 1 20 0"></path>
            <path d="M5 12.859a10 10 0 0 1 14 0"></path>
            <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
          </svg>
          <span>HD</span>
        </div>
      </div>
    </div>
    <div class="load-dots-div">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <circle fill="#F6F6F6" stroke="#F6F6F6" stroke-width="3" r="15" cx="40" cy="100">
              <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
          </circle>
          <circle fill="#F6F6F6" stroke="#F6F6F6" stroke-width="3" r="15" cx="100" cy="100">
              <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
          </circle>
          <circle fill="#F6F6F6" stroke="#F6F6F6" stroke-width="3" r="15" cx="160" cy="100">
              <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
          </circle>
      </svg>
    </div>
  `;

  lista.appendChild(button);
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-channel");
  if (!btn) return;

  const canal = canales.find((c) => c.id === btn.id);
  if (!canal) return;

  const imagenCanalActual = document.getElementById("imagenCanalActual");
  const nombreCanalActual = document.getElementById("nombreCanalActual");

  imagenCanalActual.src = canal.imagen;
  nombreCanalActual.textContent = canal.nombre;

  document.querySelectorAll(".btn-channel").forEach((b) => {
    b.classList.remove("active-btn");
    b.classList.add("inactive-btn");

    const circle = b.querySelector(".button-container");
    if (circle) {
      circle.classList.remove("active-circle");
      circle.classList.add("inactive-circle");
    }
  });

  btn.classList.remove("inactive-btn");
  btn.classList.add("active-btn");

  const activeCircle = btn.querySelector(".button-container");
  if (activeCircle) {
    activeCircle.classList.remove("inactive-circle");
    activeCircle.classList.add("active-circle");
  }

  const url = canal.url;

  if (hls) {
    hls.destroy();
    hls = null;
  }

  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    habilitarDeteccionErrores(hls);
    iniciarTimeoutVerificacion();
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
      actualizarControlesReproduccion();
    });
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = url;
    video.play();
    actualizarControlesReproduccion();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const primerCanal = canales[0];
  if (!primerCanal) return;

  const primerBoton = document.getElementById(primerCanal.id);

  if (primerBoton) {
    primerBoton.classList.remove("inactive-btn");
    primerBoton.classList.add("active-btn");

    const circle = primerBoton.querySelector(".button-container");
    if (circle) {
      circle.classList.remove("inactive-circle");
      circle.classList.add("active-circle");
    }
  }

  const imagenCanalActual = document.getElementById("imagenCanalActual");
  const nombreCanalActual = document.getElementById("nombreCanalActual");

  if (imagenCanalActual && nombreCanalActual) {
    imagenCanalActual.src = primerCanal.imagen;
    nombreCanalActual.textContent = primerCanal.nombre;
  }

  const url = primerCanal.url;

  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = url;
    video.play();
  }

  statusText.textContent = "Reproduciendo";
  playButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="lucide lucide-pause" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  `;
  isPlaying = true;
});

if (playButton && volumeButton && volumeSlider && statusText) {
  let isPlaying = false;
  let isMuted = false;

  statusText.textContent = "Reproduciendo";
  playButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="lucide lucide-pause" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  `;
  isPlaying = true;

  playButton.addEventListener("click", () => {
    if (!video) return;

    if (isPlaying) {
      video.pause();
      isPlaying = false;
      statusText.textContent = "Pausado";
      playButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-play" aria-hidden="true">
          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
        </svg>
      `;
    } else {
      video.play();
      isPlaying = true;
      statusText.textContent = "Reproduciendo";
      playButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-pause" aria-hidden="true">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
    }
  });

  volumeButton.addEventListener("click", () => {
    if (!video) return;

    if (isMuted) {
      isMuted = false;
      video.muted = false;
      if (video.volume === 0) video.volume = 0.5;
    } else {
      isMuted = true;
      video.muted = true;
    }

    volumeSlider.value = isMuted ? 0 : video.volume;

    if (isMuted) {
      volumeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-volume-x" aria-hidden="true">
          <path d="M11 5L6 9H3v6h3l5 4V5z"></path>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
    } else if (video.volume < 0.4) {
      volumeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-volume-1" aria-hidden="true">
          <path d="M11 5L6 9H3v6h3l5 4V5z"></path>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
    } else {
      volumeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-volume-2" aria-hidden="true">
          <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
          <path d="M16 9a5 5 0 0 1 0 6"></path>
          <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
        </svg>
      `;
    }
  });

  volumeSlider.addEventListener("input", (e) => {
    const volume = parseFloat(e.target.value);
    if (!video) return;

    video.volume = volume;
    isMuted = volume === 0;
    video.muted = isMuted;

    if (isMuted) {
      volumeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-volume-x" aria-hidden="true">
          <path d="M11 5L6 9H3v6h3l5 4V5z"></path>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
    } else if (volume < 0.4) {
      volumeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-volume-1" aria-hidden="true">
          <path d="M11 5L6 9H3v6h3l5 4V5z"></path>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
    } else {
      volumeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-volume-2" aria-hidden="true">
          <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
          <path d="M16 9a5 5 0 0 1 0 6"></path>
          <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
        </svg>
      `;
    }
  });
}

function actualizarControlesReproduccion() {
  if (!video) return;

  statusText.textContent = "Reproduciendo";

  playButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="lucide lucide-pause" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  `;

  video.muted = false;
  video.volume = 0.5;
  volumeSlider.value = 0.5;

  volumeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="lucide lucide-volume-2" aria-hidden="true">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
      <path d="M16 9a5 5 0 0 1 0 6"></path>
      <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
    </svg>
  `;

  isPlaying = true;
  isMuted = false;
}
