const copyBtn = document.getElementById("sh-cp");

copyBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    await navigator.clipboard.writeText(location.href);

    const toast = document.getElementById("copy-toast");

    toast.classList.add("show");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  } catch (err) {
    console.error(err);
  }
});
