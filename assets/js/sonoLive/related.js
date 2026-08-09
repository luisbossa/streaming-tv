/* =========================================================
   EMISORAS SIMILARES
========================================================= */

const relatedContainer = document.getElementById("related-shows");

/* =========================================================
   RENDER
========================================================= */

export function renderRelated(currentShow, shows) {
  if (!relatedContainer || !currentShow) {
    return;
  }

  relatedContainer.innerHTML = "";

  const related = shows.filter(
    (show) =>
      show.category === currentShow.category &&
      show.title !== currentShow.title,
  );

  if (related.length === 0) {
    relatedContainer.innerHTML = `
            <span style="color:#666">
                No hay radios relacionadas
            </span>
        `;

    return;
  }

  related.forEach((show) => {
    const div = document.createElement("div");

    div.className = "related-card";

    div.innerHTML = `
                <img
                    src="${show.cover || show.img}"
                    alt="${show.title}"
                >

                <strong>
                    ${show.title}
                </strong>

                <span>
                    ${show.host || ""}
                </span>
            `;

    /*
     * El click lo manejará radio.js
     * mediante un evento personalizado
     */

    div.addEventListener("click", () => {
      window.dispatchEvent(
        new CustomEvent("radio:select", {
          detail: show,
        }),
      );
    });

    relatedContainer.appendChild(div);
  });
}
