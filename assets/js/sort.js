const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const categoria = btn.textContent.trim();

    categoryButtons.forEach((b) => b.classList.remove("active-category"));

    btn.classList.add("active-category");

    aplicarFiltro(categoria);
  });
});

function aplicarFiltro(categoria) {
  const filtrados =
    categoria === "Todos"
      ? canales
      : canales.filter((c) => c.categoria === categoria);

  renderCanales(lista, filtrados);

  if (filtrados.length && typeof window.reproducirCanal === "function") {
    resetPlayerUI();

    window.reproducirCanal(filtrados[0]);

    setTimeout(() => {
      const btn = document.querySelector(
        `.btn-channel[data-index="${canales.indexOf(filtrados[0])}"]`,
      );

      if (btn) setActiveChannelUI(btn);
    }, 0);
  }
}

aplicarFiltro("Todos");
