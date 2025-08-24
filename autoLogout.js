document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  if (hours > 0 || (hours === 0 && minutes >= 1))
    localStorage.clear();
    if (!window.location.pathname.endsWith("index.html")) {
      window.location.href = "index.html";
    }
  }
});

