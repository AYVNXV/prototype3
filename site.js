const pageName = document.body.dataset.page;
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

document.querySelectorAll(`[data-nav="${pageName}"]`).forEach((link) => {
  link.setAttribute("aria-current", "page");
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation?.classList.toggle("is-open", !isExpanded);
});
