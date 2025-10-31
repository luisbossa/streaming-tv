const btnSettings = document.getElementById("btnSettings");
const settingsMenu = document.getElementById("settingsMenu");

btnSettings.addEventListener("click", (e) => {
  e.stopPropagation();
  settingsMenu.classList.toggle("show");
});

document.addEventListener("click", () => {
  settingsMenu.classList.remove("show");
});

settingsMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    settingsMenu.classList.remove("show");
  });
});

const themeOption = document.querySelector('[data-action="theme"]');

const currentTheme = localStorage.getItem("theme") || "dark";
document.body.setAttribute("data-theme", currentTheme);
themeOption.textContent =
  currentTheme === "dark" ? "Tema: Claro" : "Tema: Oscuro";

themeOption.addEventListener("click", () => {
  const newTheme =
    document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  themeOption.textContent =
    newTheme === "dark" ? "Tema: Claro" : "Tema: Oscuro";
});
