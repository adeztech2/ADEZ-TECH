function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");

  if (sidebar) {
    sidebar.classList.toggle("open");
  }
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
