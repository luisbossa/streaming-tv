import { categories } from "./data/categories-data.js";

let onCategoryChange = null;

const categoriesContainer = document.getElementById("radio-categories");

export function initCategories(callback) {
  onCategoryChange = callback;
  renderCategories();
}

function renderCategories() {
  if (!categoriesContainer) {
    return;
  }

  categoriesContainer.innerHTML = "";

  categories.forEach((category) => {
    const div = document.createElement("div");

    div.className = "category";

    if (category.title === "Todas") {
      div.classList.add("active");
    }

    div.innerHTML = `
            <strong>${category.title}</strong>
            <p>${category.date}</p>
        `;

    div.addEventListener("click", () => {
      document.querySelectorAll(".category").forEach((element) => {
        element.classList.remove("active");
      });

      div.classList.add("active");

      if (onCategoryChange) {
        onCategoryChange(category.title);
      }
    });

    categoriesContainer.appendChild(div);
  });
}
