document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const hour = now.getHours();

  // Wyloguj jeśli godzina to 20–23 lub 0–6
  if (hour >= 20 || hour < 7) {
    localStorage.clear();
    if (!window.location.pathname.endsWith("index.html")) {
      window.location.href = "index.html";
    }
  }
});
