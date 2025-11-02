function reproducirCanal(canal) {
  if (!canal) return;

  const imagenCanalActual = document.getElementById("imagenCanalActual");
  const nombreCanalActual = document.getElementById("nombreCanalActual");

  // Actualizar info visual
  if (imagenCanalActual && nombreCanalActual) {
    imagenCanalActual.src = canal.imagen;
    nombreCanalActual.textContent = canal.nombre;
  }

  document.querySelectorAll(".btn-channel").forEach((b) => {
    b.classList.remove("active-btn");
    b.classList.add("inactive-btn");
    const circle = b.querySelector(".button-container");
    if (circle) {
      circle.classList.remove("active-circle");
      circle.classList.add("inactive-circle");
    }
  });

  const btn = document.getElementById(canal.id);
  if (btn) {
    btn.classList.add("active-btn");
    btn.classList.remove("inactive-btn");

    const circle = btn.querySelector(".button-container");
    if (circle) {
      circle.classList.add("active-circle");
      circle.classList.remove("inactive-circle");
    }
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
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch((err) => console.warn("Autoplay bloqueado:", err));
      if (typeof actualizarControlesReproduccion === "function") {
        actualizarControlesReproduccion();
      }
    });
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = url;
    video.play().catch((err) => console.warn("Autoplay bloqueado:", err));
    if (typeof actualizarControlesReproduccion === "function") {
      actualizarControlesReproduccion();
    }
  }
}

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const categoriaSeleccionada = btn.textContent.trim();

    categoryButtons.forEach((b) => b.classList.remove("active-category"));
    btn.classList.add("active-category");

    let canalesFiltrados;
    if (categoriaSeleccionada === "Todos") {
      canalesFiltrados = canales; // mostrar todos
    } else {
      canalesFiltrados = canales.filter(
        (canal) => canal.categoria === categoriaSeleccionada
      );
    }

    lista.innerHTML = "";

    canalesFiltrados.forEach((canal, index) => {
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

    if (canalesFiltrados.length > 0) {
      const primerCanal = canalesFiltrados[0];
      reproducirCanal(primerCanal);
    }
  });
});
