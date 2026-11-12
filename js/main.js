// ========================================
// IMPORTAÇÕES
// ========================================

import { updateThemeButton } from "./theme.js";
import {
  getPrinterStatus,
  getTonerStatus,
  getImagingUnitStatus,
} from "./monitoring.js";
import { printers } from "./data.js";

// ========================================
// 1. SELEÇÃO DOS ELEMENTOS DO DOM
// ========================================

const body = document.body;
const themeToggleBtn = document.querySelector("button#theme-toggle");
const navLinks = document.querySelectorAll("a.nav-link");
const pages = document.querySelectorAll("section.page");
const pageTitle = document.querySelector("h1#page-title");

// ========================================
// 2. DARK / LIGHT MODE
// ========================================

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  updateThemeButton();
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light-theme");
}

updateThemeButton();

// ========================================
// 3. NAVEGAÇÃO ENTRE PÁGINAS
// ========================================

const pageTitles = {
  dashboard: "Dashboard",
  printers: "Impressoras",
  alerts: "Alertas",
};

navLinks.forEach((link) => {
  const selectedPage = document.getElementById(link.dataset.page);

  link.addEventListener("click", (e) => {
    e.preventDefault();

    pages.forEach((page) => {
      page.hidden = true;
    });

    navLinks.forEach((link) => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    });

    if (selectedPage) {
      selectedPage.hidden = false;
      pageTitle.textContent = pageTitles[link.dataset.page];
      link.setAttribute("aria-current", "page");
    }

    link.classList.add("is-active");
  });
});

// ========================================
// 4. DADOS SIMULADOS DAS IMPRESSORAS
// ========================================

// ========================================
// 5. MONITORAMENTO DAS IMPRESSORAS
// ========================================

printers.forEach((printer) => {
  console.log(`
    ${printer.location}
    ${getTonerStatus(printer.toner)}
    ${getImagingUnitStatus(printer.imagingUnit)}
    ${getPrinterStatus(printer)}
    `);
});
