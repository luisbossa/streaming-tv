const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mainNav.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});
