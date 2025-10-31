// Elementos
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("premiumModal");

// Abrir modal
openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

// Cerrar con botón X
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});
