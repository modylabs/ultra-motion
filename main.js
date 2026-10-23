
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const overlay = document.getElementById("navDrawerOverlay");
  const drawer = document.getElementById("navDrawer");
  const close = document.getElementById("drawerClose");

  // Berhenti jika elemen menu tidak ditemukan
  if (!toggle || !overlay || !drawer || !close) {
    console.error("Elemen menu tidak ditemukan.");
    return;
  }

  function openMenu() {
    overlay.classList.add("is-open");
    document.body.classList.add("drawer-open");
    overlay.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Tutup navigasi");
    drawer.inert = false;
  }

  function closeMenu() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("drawer-open");
    overlay.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka navigasi");
    drawer.inert = true;
  }

  toggle.addEventListener("click", function () {
    if (toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
    } else {
      openMenu();
    }
  });

  close.addEventListener("click", closeMenu);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) closeMenu();
  });

  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });
});
