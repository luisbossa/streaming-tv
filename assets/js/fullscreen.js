document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoPlayer");
  const fullscreenBtn = document.getElementById("btnFullscreen");

  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      // Maximizar
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        /* IE11 */
        video.msRequestFullscreen();
      }

      // Cambiar icono a minimizar
      fullscreenBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="icon-minimize" aria-hidden="true">
            <path d="M21 16v3a2 2 0 0 1-2 2h-3"></path>
            <path d="M3 8V5a2 2 0 0 1 2-2h3"></path>
            <path d="M16 3h3a2 2 0 0 1 2 2v3"></path>
            <path d="M8 21H5a2 2 0 0 1-2-2v-3"></path>
        </svg>
        `;
    } else {
      // Minimizar
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }

      // Cambiar icono a maximizar
      fullscreenBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="icon-maximize" aria-hidden="true">
            <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
            <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
            <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
            <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
        </svg>
        `;
    }
  });

  // Detectar cambio de fullscreen con tecla ESC o doble click
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      fullscreenBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="icon-maximize" aria-hidden="true">
            <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
            <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
            <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
            <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
        </svg>
        `;
    }
  });
});
