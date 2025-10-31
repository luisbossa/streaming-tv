const categoryMenuBtn = document.getElementById("category-menu-btn");
const categoryContainer = document.querySelector(".category-container");

categoryContainer.style.maxHeight = "0";
categoryContainer.style.overflow = "hidden";
categoryContainer.style.transition =
  "max-height 0.4s ease-in-out, padding 0.4s ease-in-out";
categoryContainer.style.paddingTop = "0";
categoryContainer.style.paddingBottom = "0";

const originalPaddingTop = "0.5rem";
const originalPaddingBottom = "0.5rem";

let isOpen = false;

categoryMenuBtn.addEventListener("click", () => {
  if (!isOpen) {
    categoryContainer.style.paddingTop = originalPaddingTop;
    categoryContainer.style.paddingBottom = originalPaddingBottom;
    categoryContainer.style.maxHeight =
      categoryContainer.scrollHeight + 18 + "px";
    isOpen = true;
  } else {
    categoryContainer.style.maxHeight = "0";
    categoryContainer.style.paddingTop = "0";
    categoryContainer.style.paddingBottom = "0";
    isOpen = false;
  }
});
