const menuToggle = document.getElementById("menuToggle");
const drawerOverlay = document.getElementById("navDrawerOverlay");
const navDrawer = document.getElementById("navDrawer");
const drawerClose = document.getElementById("drawerClose");

function openDrawer() {
  drawerOverlay.classList.add("is-open");
  drawerOverlay.setAttribute("aria-hidden", "false");
  navDrawer.inert = false;
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Tutup navigasi");
  document.body.classList.add("drawer-open");
  drawerClose.focus();
}

function closeDrawer() {
  drawerOverlay.classList.remove("is-open");
  drawerOverlay.setAttribute("aria-hidden", "true");
  navDrawer.inert = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka navigasi");
  document.body.classList.remove("drawer-open");
  menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  if (menuToggle.getAttribute("aria-expanded") === "true") {
    closeDrawer();
  } else {
    openDrawer();
  }
});

drawerClose.addEventListener("click", closeDrawer);

// Tutup saat area gelap di luar drawer ditekan
drawerOverlay.addEventListener("click", (event) => {
  if (event.target === drawerOverlay) {
    closeDrawer();
  }
});

// Tutup setelah memilih menu
navDrawer.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    closeDrawer();
  });
});

// Tutup dengan tombol Escape
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    closeDrawer();
  }
});

// Tahun otomatis
document.getElementById("current-year").textContent =
  new Date().getFullYear();

document.querySelectorAll(".drawer-year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
