import { radioState } from "./state.js";

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const status = document.getElementById("status");
const volume = document.getElementById("volume");

export function initPlayer(nextRadio, previousRadio) {
  if (playBtn) {
    playBtn.addEventListener("click", togglePlay);
  }

  if (prevBtn && previousRadio) {
    prevBtn.addEventListener("click", previousRadio);
  }

  if (nextBtn && nextRadio) {
    nextBtn.addEventListener("click", nextRadio);
  }

  if (volume) {
    audio.volume = Number(volume.value);

    volume.addEventListener("input", () => {
      audio.volume = Number(volume.value);
    });
  }

  audio.addEventListener("play", () => {
    radioState.playing = true;
    updateStatus("Reproduciendo");
    updatePlayButton();
  });

  audio.addEventListener("pause", () => {
    radioState.playing = false;
    updateStatus("Pausado");
    updatePlayButton();
  });

  audio.addEventListener("error", () => {
    radioState.playing = false;
    updateStatus("Error de reproducción");
    updatePlayButton();
  });
}

export async function playRadio(show) {
  if (!show || !show.src) {
    return;
  }

  try {
    audio.pause();

    audio.removeAttribute("src");

    audio.load();

    audio.src = show.src;

    updateStatus("Conectando...");

    await audio.play();

    radioState.playing = true;

    updateStatus("Reproduciendo");

    updatePlayButton();
  } catch (error) {
    console.error("Error al reproducir:", error);

    radioState.playing = false;

    updateStatus("No se pudo reproducir");

    updatePlayButton();
  }
}

async function togglePlay() {
  if (!audio.src || !radioState.currentShow) {
    return;
  }

  try {
    if (!radioState.playing) {
      await audio.play();
    } else {
      audio.pause();
    }
  } catch (error) {
    console.error("Error del reproductor:", error);
  }
}

function updateStatus(text) {
  if (status) {
    status.textContent = text;
  }
}

function updatePlayButton() {
  if (!playBtn) {
    return;
  }

  if (radioState.playing) {
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
