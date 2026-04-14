import { changePage } from "./model.js";

function loadPage() {
  let hash = window.location.hash;

  if (!hash || hash === "#") {
    hash = "#home";
  }

  const page = hash.replace("#", "");

  changePage(page);

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + page) {
      link.classList.add("active");
    }
  });
}
;
window.addEventListener("load", loadPage);
window.addEventListener("hashchange", loadPage);
