const header = document.getElementById("appHeader");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");

  menuToggle.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mainNav.classList.remove("active");
  }
});
