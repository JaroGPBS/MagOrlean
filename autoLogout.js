document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  if (now.getHours() >= 20) {
    localStorage.clear();
    if (!window.location.pathname.endsWith("index.html")) {
      window.location.href = "index.html";
    }
  }
});
