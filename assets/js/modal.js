const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("premiumModal");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});
