const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("radio-sidebar");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("radio-overlay");

function openSidebar() {
  if (!sidebar || !overlay) {
    return;
  }

  sidebar.classList.add("open");

  overlay.classList.add("active");

  document.body.classList.add("no-scroll");
}

function closeSidebar() {
  if (!sidebar || !overlay) {
    return;
  }

  sidebar.classList.remove("open");

  overlay.classList.remove("active");

  document.body.classList.remove("no-scroll");
}

export function initMobile() {
  if (menuBtn) {
    menuBtn.addEventListener("click", openSidebar);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
  }

  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  document.addEventListener("click", (event) => {
    if (!sidebar) {
      return;
    }

    const inside = sidebar.contains(event.target);

    const menu = menuBtn && menuBtn.contains(event.target);

    if (!inside && !menu && sidebar.classList.contains("open")) {
      closeSidebar();
    }
  });
}
