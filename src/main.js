import "@fontsource/geologica/500.css";
import "@fontsource/geologica/400.css";
import "@fontsource/geologica/cyrillic-500.css";
import "@fontsource/geologica/cyrillic-400.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/cyrillic-400.css";
import "@fontsource/manrope/cyrillic-500.css";
import "@fontsource/manrope/cyrillic-600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/cyrillic-400.css";
import "@fontsource/ibm-plex-mono/cyrillic-500.css";
import "./styles.css";

const dict = {
  en: {
    "nav.works": "Work",
    "nav.process": "Process",
    "nav.about": "About",
    "nav.contacts": "Contact",
    "hero.status": "Open to work · remote or part-time",
    "hero.role": "UI/UX designer",
    "hero.title": "Clean interfaces built on user problems",
    "hero.lead": "I design clean interfaces around user problems, from research to a clickable prototype, and organize them in Figma with components and styles.",
    "hero.cta1": "View work",
    "hero.cta2": "Write to me",
  },
};
const uk = {};
document.querySelectorAll("[data-i18n]").forEach((el) => (uk[el.dataset.i18n] = el.textContent));

function setLang(lang) {
  document.documentElement.lang = lang === "en" ? "en" : "uk";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = (lang === "en" ? dict.en : uk)[el.dataset.i18n] ?? uk[el.dataset.i18n];
  });
  document.querySelectorAll(".lang__btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch {}
}
document.querySelectorAll(".lang__btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
try { const l = localStorage.getItem("lang"); if (l === "en") setLang("en"); } catch {}

document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme !== "dark";
  root.dataset.theme = dark ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
});
