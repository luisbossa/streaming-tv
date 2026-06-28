function renderCanales(listaElement, data, activeIndex = 0) {
  listaElement.innerHTML = "";

  data.forEach((canal) => {
    const index = canales.indexOf(canal);

    const button = document.createElement("button");
    button.dataset.index = index;

    const isActive = index === activeIndex;

    button.className = `btn-channel ${isActive ? "active-btn" : "inactive-btn"}`;

    button.innerHTML = `
      <div class="button-container ${isActive ? "active-circle" : "inactive-circle"}">
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
      </div>
    `;

    listaElement.appendChild(button);
  });
}

function setActiveChannelUI(activeBtn) {
  document.querySelectorAll(".btn-channel").forEach((b) => {
    b.classList.remove("active-btn");
    b.classList.add("inactive-btn");

    const circle = b.querySelector(".button-container");
    circle?.classList.remove("active-circle");
    circle?.classList.add("inactive-circle");
  });

  activeBtn.classList.add("active-btn");
  activeBtn.classList.remove("inactive-btn");

  activeBtn
    .querySelector(".button-container")
    ?.classList.replace("inactive-circle", "active-circle");
}
