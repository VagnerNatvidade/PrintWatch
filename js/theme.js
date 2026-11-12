const themeToggleBtn = document.querySelector("button#theme-toggle");

export const updateThemeButton = () => {
  if (document.body.classList.contains("light-theme")) {
    themeToggleBtn.textContent = "🌙";
    themeToggleBtn.setAttribute("aria-label", "Ativar modo escuro");
  } else {
    themeToggleBtn.textContent = "☀️";
    themeToggleBtn.setAttribute("aria-label", "Ativar modo claro");
  }
};
